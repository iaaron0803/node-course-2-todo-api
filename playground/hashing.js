const {SHA256} = require("crypto-js");
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);
var decode = jwt.verify(token, '123abc');
console.log(decode);
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// // console.log(message);
// // console.log(hash);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)).toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// console.log(token.hash);

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// console.log(token.hash);
