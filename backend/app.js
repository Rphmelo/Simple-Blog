const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts.js');

const options = {
  autoIndex: false,
  reconnectTries: 10,
  reconnectInterval: 500,
  poolSize: 5,
  bufferMaxEntries: 0,
  useNewUrlParser: true
}

const uri = "";

console.log("Connecting... Wait a moment");

mongoose.connect(uri, options)
.then(() => {
  console.log("Connected to database");
})
.catch((err) => {
  console.log("Connection failed");
  console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
