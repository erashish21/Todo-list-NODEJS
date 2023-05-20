const mongoose = require('mongoose');
//create a schema based on name
const todoSchema = new mongoose.Schema({
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        dueDate: {
            type: Date,
            required: true
        }  
});
const TodoLists = mongoose.model('TodoLists',todoSchema);
module.exports = TodoLists;