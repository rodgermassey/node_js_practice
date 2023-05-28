const MongoClient = require('mongodb').MongoClient

const uri = 'mongodb+srv://prajjwalrodgermassey:prajjwalrodgermassey@cluster0.hwhopff.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri)

async function run () {
    try{
        await client.connect();

        const db = client.db("demo") 
        const collection = db.collection('people')
        
        console.log("Connected successfully to server");
        
        await db.command({ping:1});

// insertOne inserts single document in the database
      //   const result = await collection.insertOne({name:'prajjwal', age:23})

// findOne finds the single document from the database and returns it
        const final_result = await collection.findOne({name:'Mike'})
        console.log(final_result)

// replaceOne replaces the entire document(object) with the new provided document(object).
      //   await collection.replaceOne({name: 'prajjwal'},{ age: 27})
        
// updateOne just updates the individual fields(properties) of the document(object).
      await collection.updateOne({name: "prajjwal"}, {$set: {age: 27}})
    
// deleteOne deletes the document from the collection.
      await collection.deleteOne({name: 'Miachel'})
  } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
  }   
}
run().catch(console.dir);