const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    // fetch data
    const { username, email, password, confirmPassword } = req.body;
    let isAdmin = false;

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

    console.log(ADMIN_EMAIL);

    // checkk for empty fields
    if (!username || !email || !password || !confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // check for  password and confirm password
    if (password != confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "Password and Confirm Password value does not match",
      });
    }

    //check user existance

    const existingUserName = await User.findOne({ username: username });

    if (existingUserName) {
      return res.status(400).json({
        success: false,
        message: "Username is  Already in use",
      });
    }

    const existUser = await User.findOne({ email: email });

    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "Email is Already in use",
      });
    }

    // Hash Password

    const hashedPassword = await bcrypt.hash(password, 10);

    if (email === ADMIN_EMAIL) {
      isAdmin = true;
    }

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      isAdmin,
    });

    // return res
    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "User creation failed",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "field can not be empty",
      });
    }

    // user existence check

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "User is not existed in database || Please signup first",
      });
    }

    // generate jwt token after password matching

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const payload = {
        email: user.email,
        id: user._id,
        isAdmin: user.isAdmin,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user.token = token;
      user.password = undefined;

      // create cookie
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      // send response
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Login success",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      success: false,
      message: "Login Failed || Please Try Again",
    });
  }
};
