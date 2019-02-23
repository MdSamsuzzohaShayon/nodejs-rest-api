const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');


// REQUEST FOR SHOWING DATA OR GETTING DATA
router.get('/', (req, res, next) => {
    //IF ID DON'T PASS ANY ARGUMENT IT WILL FIND ALL ELEMENTS
    // TO GET TRUE PROMISE
    Product.find()
        .exec()
        .then(docs => {
            console.log(docs);
            // if (docs.length >= 0) {
                res.status(200).json(docs);
            // }else{
            //     res.status(404).json({
            //         message: 'No entries Found'
            //     })
            // }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});


// REQUEST FOR CREATE DATA
router.post('/', (req, res, next) => {
    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // };

    //CREATE A DATA STORE
    const product = new Product({
        //THIS WILL AUTO CREATE ID AND GIVE THAT ID
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });


    //SAVE INTO THE DATABASE
    product.save().then(result => {
        console.log(result);
        //The request has been fulfilled and resulted in a new resource being created.
        res.status(201).json({
            message: "Handling POST tequests to /products",
            createdProduct: result
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});



// REQUEST FOR SHOWING DATA OR GETTING DATA OF A PARTICULAR OBJECT 
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    // if (id === 'special') {
    //     res.status(200).json({
    //         message: 'you descovered the special id',
    //         id
    //     })
    // } else {
    //     res.status(200).json({
    //         message: 'You passed an id'
    //     });
    // }

    Product.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: "no valid enty found for provided id"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});



// REQUEST FOR UPDATE 
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Updated product"
    });
});



// REQUEST FOR DELETE SOMETHING
router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId
    Product.remove({
            _id: id
        })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});



module.exports = router;