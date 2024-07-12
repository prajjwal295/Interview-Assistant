const User = require("../models/User");
const Form = require("../models/Form");

exports.createForm = async (req, res) => {
  console.log(req.body);
  try {
    const { title, description } = req.body.formData;
    const { email } = req.user;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    if (!email) {
      return res.status(403).json({
        success: false,
        message: "User email is missing",
      });
    }

    const userDetails = await User.findOne({ email: email });

    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const formData = await Form.create({
      title,
      description,
      user: userDetails._id,
    });

    await User.findByIdAndUpdate(userDetails._id, {
      $push: {
        forms: formData._id,
      },
    });

    res.status(201).json({
      success: true,
      message: "Form created successfully",
      data: formData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.getAllForms = async (req, res) => {
  try {
    const formDetails = await Form.find().populate("user");

    res.status(201).json({
      success: true,
      message: "Form data recived successfully",
      data: formDetails,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
