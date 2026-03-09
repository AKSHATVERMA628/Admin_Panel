const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const SECRET = process.env.JWT_SECRET;

/* ================= LOGIN USER ================= */

const loginUser = async (req, res) => {

  const { username, password } = req.body;

  try {

    // find user in database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // create JWT token
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: user.role
      },
      SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        username: user.username,
        role: user.role
      }
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });

  }

};


/* ================= REGISTER USER ================= */

const registerUser = async (req, res) => {

  const { username, password, role } = req.body;

  try {

    // check if user already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const newUser = new User({
      username,
      password: hashedPassword,
      role
    });

    await newUser.save();

    res.json({
      message: "User created successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error creating user"
    });

  }

};

module.exports = { loginUser, registerUser };