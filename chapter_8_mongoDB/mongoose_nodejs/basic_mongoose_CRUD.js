const mongoose = require('mongoose')

// specify the name of the db in the uri after mongodb.net/<your db name>? and use the method mongoose.createConnection(uri)
const uri = 'mongodb+srv://prajjwalrodgermassey:prajjwalrodgermassey@cluster0.hwhopff.mongodb.net/demo?retryWrites=true&w=majority'
const demoDb = mongoose.createConnection(uri)

const pepoleSchema = new mongoose.Schema({name: String, age: Number});

//create the model on the selected database (demoDb) in our case
const People = demoDb.model("mongoosePeople", pepoleSchema)

run()

async function run(){
    const people = new People({name: "abc", age: 21})
    await people.save()
    console.log(people)
}
