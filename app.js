//THIS IS FOR SPINNING EXPRESS
const express = require('express');
const morgan = require('morgan');

const app = express();

// BY USING MORGAN WHEN WE REQUESTWE CAN SEE EXTRA LOG SING IN TERMINAL WHEN NODEMON RUNNING
// funnel all request though morgan
app.use(morgan('dev')); // FORMAT FOR OUTPUT


//REQUEST ARE FORWAREDED
const productRoute = require('./api/routes/products');
const orderRoute = require('./api/routes/orders');




// next use move the request to the next middleware
//INCOMING REQUEST GO THOUGH APP
// ROUTE WHICH SHOULD HANDLE REQUEST
app.use('/products',productRoute);
app.use('/orders',orderRoute);



// WE ARE WORKING WITH EXPRESS BUT WE ARE NOT MAKING SERVER HERE
module.exports = app;