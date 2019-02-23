const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'order ware fatched'
    });
});


router.post('/', (req, res, next)=>{
    //The request has been fulfilled and resulted in a new resource being created.
    res.status(201).json({
        message: 'order was created'
    });
});

router.get('/:orderId', (req, res, next)=>{
    res.status(200).json({
        message: 'order details',
        orderId: req.params.orderId
    });
});


router.delete('/:orderId', (req, res, next)=>{
    res.status(200).json({
        message: 'order deleted',
        orderId: req.params.orderId
    });
});




module.exports = router;