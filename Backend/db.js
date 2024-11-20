const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://sudesh:lv2lAZsLHipC8C2l@cluster0.3sycu.mongodb.net/?retryWrites=true&w=majority&appName=IMS";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;



// lv2lAZsLHipC8C2l - mondoDb pass