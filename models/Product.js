const mongoose = require('mongoose');
 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});
  
module.exports = new mongoose.model('Product', productSchema);