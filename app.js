const mongoose = require("mongoose");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("we're connected!");
});

// Schema Name

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Watermelon",
  rating: 8,
  review: "summer fruit that keeps you hydrated!"
});

const kiwi = new Fruit({
  name: "kiwi",
  rating: 5,
  review: "Kinda sour"
});

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Juicy and refreshing"
});

const banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: "Sweet and tasty"
});

// Fruit.insertMany([kiwi,orange,banana],function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("successfully saved fruits to fruitdb");
//     }
// });
//fruit.save();

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    //console.log(fruits);
    mongoose.connection.close();
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});
// const personSchema = new mongoose.Schema({
//     name:String,
//     age:Number
// });

// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name:"Sunakshi",
//     age:24
// });
//person.save();
