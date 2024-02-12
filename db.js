const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://executiveapp2023:executive2023@sales-executive.bvrrspg.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = () => {
    
    mongoose.set("strictQuery", false);

    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;