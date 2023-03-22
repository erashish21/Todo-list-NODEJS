const express = require('express');
const app = express();
const {name} = require('ejs');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.set(express.urlencoded());
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.render("home");
  });
app.listen(port,function(err){
    if(err){
        console.log(`Error is running the server: ${port}`);
    }
    console.log(`server is runing port: ${port}`);
    
})