const mongoose= require("mongoose");


const movieSchema = mongoose.Schema({
    title : {type:String, required : true},
    rating: {type:Number, required:true},
    image : String
})

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;