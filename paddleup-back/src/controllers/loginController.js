require("dotenv").config();
const jwt = require("jsonwebtoken");

const secretKey = process.env.ACCESS_SECRET;
const expires = process.env.EXPIRY;

const users = [
  {
    userId: "user1",
    email: "benpaddle@gmail.com",
    fullName: "Ben Paddle",
    identifier: "BenPaddle",
    password: "password123",
  },
];

const registerController = async (req, res) => {
  try {
    const { email, fullName, identifier, password } = req.body;

    if (!identifier && !password && !email && !fullName) {
      res.status(400).json({ error: "Missing Fields" });
      return;
    }
    const existingUser = users.find((u) => u.identifier === identifier);
    if (existingUser) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const newUser = {
      userId: `user${users.length + 1}`,
      email,
      fullName,
      identifier,
      password,
    };

    users.push(newUser);

    res.status(201).json({ message: "Successfully Created User" });
    return;
  } catch (e) {
    res.status(500).json({ error: `Internal Server Error: ${e}` });
  }
};

const loginController = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    console.log(`Request Body: ${JSON.stringify(req.body)}`);

    if (!identifier || !password) {
      res.status(400).json({ error: "Missing username or email or password" });
      return;
    }

    const user = users.find(
      (u) =>
        (u.identifier === identifier || u.email === identifier) &&
        u.password === password
    );

    if (!user) {
      res.status(401).json({ error: "Incorrect username/email or password" });
      return;
    }

    const token = jwt.sign(
      { userId: user.userId, identifier: user.identifier },
      secretKey,
      { expiresIn: expires }
    );

    console.log(`Cool2sx`);
    res.status(200).json({ message: "Login Successful", token, user });
    return;
  } catch (e) {
    return res.status(500).json({ error: `Internal Server Error: ${e}` });
  }
};

const getUserController = async (req, res) => {
  const { userId } = req.params;

  const user = users.find((u) => u.userId === userId);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  res.status(200).json(user);
  return;
};

module.exports = { loginController, registerController, getUserController };
