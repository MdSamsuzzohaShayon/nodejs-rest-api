const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});


// CONVENTION HERE IT TO USE AN UPPER CASE STARTING CHARECTER
module.exports = mongoose.model('Product', productSchema);