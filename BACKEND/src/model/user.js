const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');
const Schema = mongoose.Schema;
var userSchema = new Schema({
   email: String,
   password: String,

});
var Userdata = mongoose.model('user',userSchema)
module.exports = Userdata;