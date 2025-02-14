import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
  try {
    const token = req.cookies.key;
    if (!token) {
      return res.status(500).json({
        success: false,
        message: "Unable to Authorize",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_KEY);
    if (!decode) {
      return res
        .status(500)
        .json({ success: false, message: "Unauthorized:Invalid Token" });
    }

    req.userId = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default protectRoute;
