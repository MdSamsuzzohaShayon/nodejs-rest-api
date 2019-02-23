const express = require('express');

const router = express.Router();


// REQUEST FOR SHOWING DATA OR GETTING DATA
router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "Handling GET tequests to /products"
    });
});


// REQUEST FOR CREATE DATA
router.post('/', (req, res, next)=>{
    //The request has been fulfilled and resulted in a new resource being created.
    res.status(201).json({
        message: "Handling POST tequests to /products"
    });
});



// REQUEST FOR SHOWING DATA OR GETTING DATA OF A PARTICULAR OBJECT 
router.get('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'you descovered the special id',
            id
        })
    }else{
        res.status(200).json({
            message: 'You passed an id'
        });
    }
});



// REQUEST FOR UPDATE 
router.patch('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: "Updated product"
    });
});



// REQUEST FOR DELETE SOMETHING
router.delete('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: "Deleted product"
    })
});



module.exports = router;