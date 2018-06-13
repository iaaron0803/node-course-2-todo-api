const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then((result) =>{
//     console.log(result);
// })

Todo.findByIdAndRemove('5b20b1cde7179a589280ad37').then((todo)=>{
    console.log(todo)
});