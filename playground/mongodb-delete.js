// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://user:aaron7662@ds161574.mlab.com:61574/node-db', (err, client)=>{
   if(err){
       return console.log('Unable to connect to MongoDB server');
   } 
   console.log("Connect to MongoDB server");
   const db = client.db('node-db');

    // db.collection('Todos').deleteMany({
    //     text: "Eat Lunch"
    // }).then((result) =>{
    //   console.log(result); 
    // });
    
    // db.collection('Todos').deleteOne({
    //     text: "Eat Lunch"
    // }).then((result) =>{
    //   console.log(result); 
    // });
    
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) =>{
    //   console.log(result); 
    // });
    
    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID('5b1e5e02e7179a58927f6808')
    // }).then((result) =>{
    //   console.log(result); 
    // });
    
    db.collection('Users').deleteMany({
        "name": "Aaron wong",
    }).then((result) =>{
      console.log(result); 
    });
    
//   client.close();
});