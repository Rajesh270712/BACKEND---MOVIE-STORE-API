const express= require("express");
const app = express();
const cors= require("cors");
const databaseConnect = require("./Database");
const movieRouter = require("./Routers/movie");


app.use(express.json())
app.use(cors())
app.use(logger);

function logger(req,res,next){
    
    console.log(Date(), req.method , req.path )
    next();
}
app.use(movieRouter)
databaseConnect().then(()=>{
    app.listen("3000",()=>{
        console.log("connected");
    })
})

