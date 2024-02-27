require('dotenv').config();
const mongoose = require('mongoose');
async function connectToMongo() {
    await mongoose.connect(process.env.API_KEY, {useNewUrlParser:true}).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}
    

module.exports = connectToMongo;