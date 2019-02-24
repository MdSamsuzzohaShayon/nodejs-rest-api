const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});


// CONVENTION HERE IT TO USE AN UPPER CASE STARTING CHARECTER
module.exports = mongoose.model('Product', productSchema);