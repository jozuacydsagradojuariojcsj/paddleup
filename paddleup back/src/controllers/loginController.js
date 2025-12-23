require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.ACCESS_SECRET;
const expires = process.env.EXPIRY;

const userId = "user123";
const userIdentifier = "BenPaddle";
const userPassword = "password123";

const loginController = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    console.log(`Request Body: ${JSON.stringify(req.body)}`);

    if (!identifier || !password) {
      return res
        .status(400)
        .json({ error: "Missing username or email or password" });
    }

    if (identifier == userIdentifier && password == userPassword) {
      const token = jwt.sign({ userId, userIdentifier }, secretKey, {
        expiresIn: expires,
      });
      console.log(`Cool2sx`);
      return res.status(200).json({ message: "Login Successful", token });
    } else {
      return res.status(401).json({ error: `Incorrect Username or Password` });
    }
  } catch (e) {
    return res.status(500).json({ error: `Internal Server Error: ${e}` });
  }
};

module.exports = { loginController };
