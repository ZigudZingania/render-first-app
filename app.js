require('dotenv').config();
const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.set('views', __dirname + '/../views');

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('index');
});

app.get('/about', (req, res)=>{
  res.render('index', {person: 'Rohan'});
})

app.listen(PORT, () => {
  console.log("Listening at port: ", PORT);
});
