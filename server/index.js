const express = require("express");
const connection = require("./config/db");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 27017;


require("dotenv").config();


app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/", async (req, res) => {
  res.send({ mesg: "Welcome to CommUnity" });
});




app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database connection Successful");
  } catch (err) {
    console.log(err);
    console.log("Couldn't connect to database");
  }

  console.log("app is running in port ", PORT);
});
