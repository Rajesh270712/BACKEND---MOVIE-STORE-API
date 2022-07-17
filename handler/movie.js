const Movie = require("../Database/movie");



async function fetchAllMovie(req,res){
    const { skip,limit } = req.query;
    const movie = await Movie.find().skip(skip).limit(limit);

    res.send({
        data : movie
    })
}
async function fetchSingleMovie(req,res){
    const {id} = req.params;

    const movie = await Movie.findById(id);
    res.send({
        data:movie
    })
}
async function filterBy(req,res){
    const {t,sort} = req.query;
    
    let movie;
    if(t){
        console.log(t,sort)
         movie = await Movie.find({title:t})
    } 
    else if(sort!=undefined){
         movie =  (sort=="title") ? await Movie.find().sort({title:1}) : await Movie.find().sort({rating:1}) ;
    }


    res.send({
        data:movie
    })
}


module.exports={
    fetchAllMovie,
    fetchSingleMovie,
    filterBy,
}