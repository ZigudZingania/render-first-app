require('dotenv').config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get('/about', (req, res)=>{
  res.send('This is about page.');
})

app.listen(PORT, () => {
  console.log("Listening at port: ", PORT);
});
