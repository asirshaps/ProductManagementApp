// Accessing mongoose package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://localhost:27017/ProductDb');

// Schema definition
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
productId :Number,
productName:String,
productCode:String,
releaseDate:String,
description:String,
price : Number,
starRating : Number,
imageUrl : String
});

// model creation
var Productdata = mongoose.model('product',NewProductSchema);
module.exports = Productdata;