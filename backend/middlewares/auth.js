const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log(token);

    if (!token) {
      console.log("Token is missing from the request headers");
      return res.status(401).json({
        success: false,
        message: "Token is missing",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log("Token successfully verified, user data:", req.user);
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        console.log("Token has expired");
        return res.status(401).json({
          success: false,
          message: "Token expired",
          expiredAt: error.expiredAt,
        });
      }
      console.log("Invalid token:", error.message);
      return res.status(400).json({
        success: false,
        message: "Invalid token",
      });
    }
  } catch (error) {
    console.log("Authentication error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Authentication error",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admins only",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
