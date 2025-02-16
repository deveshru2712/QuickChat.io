import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  const { username } = req.params;
  try {
    const users = await User.find({
      username: { $regex: username, $options: "i" },
    });

    if (!users || users.length == 0) {
      return res.status(404).json({
        success: false,
        message: "Users not found ❌",
      });
    }

    const newList = users.map((user) => {
      const { password, ...newUser } = user._doc;
      return newUser;
    });

    res.status(200).json({ list: newList });
  } catch (error) {
    console.log(`Error in get user controller: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: "Unable  found the users",
    });
  }
};
