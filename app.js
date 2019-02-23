//THIS IS FOR SPINNING EXPRESS
const express = require('express');

const app = express();

//REQUEST ARE FORWAREDED
const productRoute = require('./api/routes/products');



// next use move the request to the next middleware
//INCOMING REQUEST GO THOUGH APP
app.use('/products',productRoute);


// WE ARE WORKING WITH EXPRESS BUT WE ARE NOT MAKING SERVER HERE
module.exports = app;