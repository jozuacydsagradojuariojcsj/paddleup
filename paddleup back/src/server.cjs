const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

const port = process.env.PORT;

const authRouter = require("./routes/auth");
const coachRouter = require("./routes/coach")

app.use("/user", authRouter);
app.use("/coach", coachRouter);



/*
const userRouter = require("./routes/users");
const adminRouter = require("./routes/admin");

app.use("/users", userRouter);
app.use("/admin", adminRouter); */

app.listen(port, () => {
  console.log(`Server Running on Port:${port}`);
});
