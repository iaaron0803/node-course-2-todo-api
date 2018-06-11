// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://user:aaron7662@ds161574.mlab.com:61574/node-db', (err, client)=>{
   if(err){
       return console.log('Unable to connect to MongoDB server');
   } 
   console.log("Connect to MongoDB server");
   const db = client.db('node-db');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b1e695fe7179a58927f6c6d')
    // }, {
    //     $set:{
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // })
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b1e6b5ee7179a58927f6d66')
    }, {
        $set:{
            name: "Shin Shin"
        },
        $inc:{
            age: -1
        }
        
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    })
    
//   client.close();
});