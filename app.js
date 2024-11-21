// dependencies
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./Routes/users");
require('dotenv').config();

const app = express();

// * Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// * Routes
app.use("/users", userRouter);

// ! Database Connection
const db_name = process.env.DB_NAME;
const db_url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5vcpt.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=Cluster0`;

// ! Mongoose Driver Connection
const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose
  .connect(db_url, connectionOptions)
  .then(() => console.log("mongoDB connected"))
  .catch((e) => {
    console.log(e);
  });

// * 404 Handler
app.use((req, res, next) => {
  return res.status(404).send("404 - Not Found");
});

// * Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));