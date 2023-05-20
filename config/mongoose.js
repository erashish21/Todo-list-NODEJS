//Require a monogo lib
const mongoose = require('mongoose');

//You can connect to MongoDB with the mongoose.connect() method. (coonect to database)
mongoose.connect('mongodb+srv://ashishbundela123:oD0TQitYcn7V5pXg@cluster0.zqajxze.mongodb.net/TodoData');

// acquire the connection
const db = mongoose.connection;

//To handle errors after initial connection was established or not
db.on('error',console.error.bind(console,'Error connecting to db'));

db.once('open',function(){
    console.log('Successfully coneect to dababase');
})