require("dotenv").config();
const connectDB = require('./db/config');
const Product = require('./models/product');

const start = async ()=>{
    try {
        await connectDB(process.env.Mo)
    } catch (error) {
        console.log(error);
    }
}



start();