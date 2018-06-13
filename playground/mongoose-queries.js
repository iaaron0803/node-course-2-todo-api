const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

var id = '5b1f3f63de67a7150439f77b12';

if(!ObjectID.isValid(id)){
    console.log('ID format is not correct');
}
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log(todo);
// }).catch((e) => {
//     console.log('invalid ID format');
// })

User.findById(id).then((user) =>{
    if(!user){
       return console.log('Id not found');
    }
    console.log(user);
}, (e) => {
    console.log('invalid ID ')
})