const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@prod-website.uam9zcv.mongodb.net/chatAppMean?retryWrites=true&w=majority`,
  () => {
    console.log("connected to mongodb");
  }
);

//pass= passkar
