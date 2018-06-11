// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost/TodoApp', (err, client)=>{
   if(err){
       return console.log('Unable to connect to MongoDB server');
   } 
   console.log("Connect to MongoDB server");
   const db = client.db('TodoApp');
   
//   db.collection('Todos').insertOne({
//       text: 'something to do',
//       complated: false
//   }, (err, result) => {
//       if(err){
//           return console.log('Unable to insert todo', err);
//       }
//       console.log(JSON.stringify(result.ops, undefined, 2));
      
//   });

    // db.collection('User').insertOne({
    //      name: 'Aaron Wong Leh Jin',
    //      age: '25',
    //      location: '460008'
    //   }, (err, result) => {
    //       if(err){
    //           return console.log('Unable to insert user', err);
    //       }
    //       console.log(JSON.stringify(result.ops, undefined, 2));
          
    //   });
   
   client.close();
});