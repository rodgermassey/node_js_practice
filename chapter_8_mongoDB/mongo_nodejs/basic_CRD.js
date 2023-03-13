// const MongoClient = require('mongodb').MongoClient

// let testEntry = {name: "John", age: 26}
// let searchKey = {name: "John"}

// /*pass in the first parameter to the MongoClient's connect method specifying the particular DB to connect to.*/ 
// MongoClient.connect('mongodb://127.0.0.1:27017/demo',(err,db)=>{
// console.log('im running')    
// if(err){
//         throw err;
//     }
//     console.log('successfully connected');

//     db.close()

// }) 
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://127.0.0.1:27017/demo";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
   const db =  await client.connect();
    // Establish and verify connection
    await client.db("demo").command({ ping: 1 });
    const result = await client.db("demo").collection("people").insertOne({name:'Mike', age:23})
    console.log(result)
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
