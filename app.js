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


//URL ERROR HANDLING
app.use((req, res, next)=>{
    //ERROR OBJECT IS AVAILABLE BY DEFAULT
    const error = new Error('Not found');
    error.status = 404;
    // NEXT WILL FORWARD THE ERROR REQUEST INSTAND OF ORIGINAL ONE
    next(error);
});


//THIS WILL HANDLE ALL KIND OF ERROR
// ERROR THOROWS FROM ANYWARE ELSE FROM THE APPLICATION
// THIS WILL NOT HAPPEN YET
// EXAMPLE THIS ERROR WILL HAPPEN WHEN I ADD DATABASE
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});



// WE ARE WORKING WITH EXPRESS BUT WE ARE NOT MAKING SERVER HERE
module.exports = app;