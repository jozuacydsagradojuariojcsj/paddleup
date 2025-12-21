const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

const port = process.env.PORT;

const authRouter = require("./routes/auth");

app.use("/user", authRouter);
/*
const userRouter = require("./routes/users");
const adminRouter = require("./routes/admin");

app.use("/users", userRouter);
app.use("/admin", adminRouter); */

app.listen(port, () => {
  console.log(`Server Running on Port:${port}`);
});
