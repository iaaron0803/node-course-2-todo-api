// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://user:aaron7662@ds161574.mlab.com:61574/node-db', (err, client)=>{
   if(err){
       return console.log('Unable to connect to MongoDB server');
   } 
   console.log("Connect to MongoDB server");
   const db = client.db('node-db');

//   db.collection('Todos').find({
//       _id: new ObjectID('5b1e56f4e7179a58927f658b')
//   }).toArray().then((docs) =>{
//         console.log("todos");
//         console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
       
//      console.log('Unable to fetch todos', err);
//   });

    //  db.collection('Todos').find().count().then((count) =>{
    //         console.log("todos count:", count);
           
    //   }, (err) => {
           
    //      console.log('Unable to fetch todos', err);
    //   });
   
      db.collection('Users').find({
     name: "Aaron wong"
    }).toArray().then((docs) =>{
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
       
     console.log('Unable to fetch todos', err);
  });
   
   
//   client.close();
});