const mongoose= require("mongoose");


async function databaseConnect(){
    try {
        mongoose.connect("mongodb://localhost:27017/movie");
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports= databaseConnect;