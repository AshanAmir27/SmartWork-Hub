const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({
      code: 201,
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      code: 400,
      success: false,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({
        error: "User not found",
      });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({
        error: "Invalid credentials",
      });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      code: 200,
      status: true,
      message: "User logged in successfully",
      token: token,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const message = "User profile fetched";
    res.status(200).json({
      code: 200,
      success: true,
      message: message,
    });
  } catch (error) {
    res.status(400).json({
      code: 400,
      success: false,
      message: error,
    });
  }
};
