import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genToken from "../Utils/genToken.js";

export const signup = async (req, res) => {
  try {
    const { username, fullname, email, password } = req.body;

    if (!username || !fullname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password should be of 6 character",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already associated with another account",
      });
    }

    const existingEmail = await User.findOne({
      username,
    });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Username already associated with another account",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      fullname,
      email,
      password: hashedPassword,
    });

    genToken(newUser._id, res);
    return res.status(201).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create account",
    });
    console.log(`Error in the signup controller: ${error.message}`);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exists",
      });
    }

    const checkPassword = await bcrypt.compare(password, user?.password);
    if (!checkPassword) {
      return res.status(400).json({
        success: false,
        message: "Wrong Password",
      });
    }

    genToken(user._id, res);
    return res.status(200).json({
      success: true,
      message: "Logged in successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Login",
    });
    console.log(`Error in the login controller: ${error.message}`);
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("key", "", {
      expires: new Date(0),
      httpOnly: true,
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to logout",
    });
    console.log(`Error in the logout controller: ${error.message}`);
  }
};

export const getMe = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get the user info",
    });
    console.log(`Error in the getMe controller: ${error.message}`);
  }
};
