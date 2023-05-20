
//Creates an Express application. The express() function is a top-level function exported by the express module.
const express = require('express');
const app = express();

//require ejs
const {name} = require('ejs');
//path
const path = require('path');
//port number 
const port = process.env.PORT|| 8000;

const TodoLists = require('./models/todo_item');
const db = require('./config/mongoose');
//get a router path
app.get('/',require('./routes'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
//call static data
app.use(express.static('assets'));


app.post('/create-list',require('./routes')); //route list request 
app.post('/delete-list',require('./routes'));
//if connect to localhost
app.listen(port,function(err){
    if(err){
        console.log(`Error is running the server: ${port}`);
    }
    console.log(`server is runing port: ${port}`);
    
})