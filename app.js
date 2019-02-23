//THIS IS FOR SPINNING EXPRESS
const express = require('express');

const app = express();


// next use move the request to the next middleware
//INCOMING REQUEST GO THOUGH APP
app.use((req, res, next )=>{
    res.status(200).json({
        message: 'it works'
    });
});


// WE ARE WORKING WITH EXPRESS BUT WE ARE NOT MAKING SERVER HERE
module.exports = app;