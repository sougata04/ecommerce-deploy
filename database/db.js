

const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const url=`mongodb+srv://sougata2001:Sougata2001}@ecommerce.0e6chk0.mongodb.net/sougata?retryWrites=true&w=majority`;

const connectDB=()=>{


    return mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, });
}

module.exports=connectDB;
