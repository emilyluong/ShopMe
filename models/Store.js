const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    about: {
        type: String,
        required: true
    },
    gallery: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true
    },
    main_photo: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true
    },
    site_name: {
        type: String,
        required: true
    },
    url_extension: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Store', storeSchema);