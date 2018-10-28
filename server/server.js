const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
const conf = require("./database/DB");
const MongoClient = require("mongodb").MongoClient;
const app = express();

const PORT = process.env.PORT || 3000;
/*
mongoose.connect(conf.DB).then(
    ()=>{
        console.log('Connected to mongodb databse');
    }
)
*/

//connect to the mongodb database
MongoClient.connect(conf.DB).then(
    ()=>{
        console.log("Database connected")
    },
    error =>{
        console.log("Could not connect to the database "+error );
    }
);


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("Hello");
});

app.listen(PORT, function(){
    console.log("Server running on port "+PORT);
});
/*
app.listen(PORT,()=>{
    console.log(`Server running on port `&{PORT});
});
*/