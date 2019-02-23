//THIS IS FOR SPINNING EXPRESS
const express = require('express');

const app = express();

//REQUEST ARE FORWAREDED
const productRoute = require('./api/routes/products');
const orderRoute = require('./api/routes/orders');



// next use move the request to the next middleware
//INCOMING REQUEST GO THOUGH APP
app.use('/products',productRoute);
app.use('/orders',orderRoute);



// WE ARE WORKING WITH EXPRESS BUT WE ARE NOT MAKING SERVER HERE
module.exports = app;