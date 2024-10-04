const express = require("express");
const color = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mysql2Pool = require("./config/db");

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));


//routes
app.use("/api/v1/student", require('./routes/studentsRoute'))



app.get("/test", (req, res) => {
  res.status(200).send("Welcome to Node With Mysql");
});

const PORT = process.env.PORT || 8091;

mysql2Pool.query("SELECT 1").then(() => {
  console.log("My Sql is connected".bgCyan.white);

  //listen
  app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`.bgMagenta.white);
  });
}).catch((error)=>{
    console.log(error)
});

