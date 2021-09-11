const mongoose = require('mongoose');
const Image = require('./Image');

const storeSchema = new mongoose.Schema({
    site_name: {
        type: String,
        required: true
    },
    url_extension: {
        type: String,
        required: true
    },
    gallery: {
        type: [Object],
        required: true
    },
    main_photo: {
        data: {
            type: Buffer,
            required: true
        },
        contentType:{
            type: String,
            required: true
        }
    },
    created_date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Store', storeSchema);