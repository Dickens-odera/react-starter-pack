const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("Server running on port "+ PORT);
});