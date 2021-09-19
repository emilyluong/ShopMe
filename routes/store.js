const express = require('express');
const router = express.Router();
const Store = require('../models/Store');
const Image = require('../models/Image');
const Product = require('../models/Product');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// set storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
const upload = multer({ storage: storage })

// @route POST /store
// @access Private
// @desc Create a store
router.post('/', upload.fields([
    {name: 'main_photo', maxCount: 1}, 
    {name: 'gallery', maxCount: 6},
    {name: 'productPhotos'}]),
    async (req, res) => {
    try {
        // Main photo
        const main_photo = new Image({
            data: fs.readFileSync(req.files.main_photo[0].path),
            contentType: req.files.main_photo[0].mimetype
        })
        await main_photo.save();
        
        // Product
        const productPhotos = req.files.productPhotos
        const productIds = [];
        for (let i = 0; i < productPhotos.length; i++) {            
            let productPhoto = new Image({
                data: fs.readFileSync(req.files.productPhotos[i].path),
                contentType: req.files.productPhotos[i].mimetype
            })
            await productPhoto.save();

            const parseJSONProduct = JSON.parse(req.body.products[i])

            let product = new Product({
                name: parseJSONProduct.name,
                cost: parseJSONProduct.cost,
                desc: parseJSONProduct.desc,
                image: productPhoto._id
            })

            // Push to array of product ids
            productIds.push(product._id)
            await product.save();
        } 

        // Gallery
        const galleryIds = [];
        for (let i = 0; i < req.files.gallery.length; i++) {
            let galleryImage = new Image({
                data: fs.readFileSync(req.files.gallery[i].path),
                contentType: req.files.gallery[i].mimetype
            })

            galleryIds.push(galleryImage._id);
            await galleryImage.save();
        }

        const store = new Store({
            site_name: req.body.site_name,
            url_extension: req.body.url_extension,
            about: req.body.about,
            message: req.body.message,
            main_photo: main_photo._id,
            products: productIds,
            gallery: galleryIds
        })
        await store.save();

        return res.status(200).json({messages: 'Create Store Success'});
    } catch (error) {
        return res.status(500).json({messages: "Server error"});
    }
})

// @route GET /:urlExt
// @access Private
// @desc Get a store
router.get('/:urlExt', async (req, res) => {
    try {
        const websiteInfo = await Store.findOne({url_extension: req.params.urlExt}).lean();

        // Main photo
        const main_photo = await Image.findOne({_id: websiteInfo.main_photo});
        websiteInfo.main_photo = main_photo;
        
        // Product 
        const products = []
        for (let i = 0; i < websiteInfo.products.length; i++) {
            const product = await Product.findOne({_id: websiteInfo.products[i]}).lean();

            products.push(product);
        }
        
        const productImage = []
        for (let i = 0; i < products.length; i++) {
            const image = await Image.findOne({_id: products[i].image._id});
            productImage.push(image)
        }
        
        for (let i = 0; i < products.length; i++) {
            products[i].image = productImage[i]
        }
        websiteInfo.products = products;

        // Gallery
        const galleryImage = []
        for (let i = 0; i < websiteInfo.gallery.length; i++) {
            const image = await Image.findOne({_id: websiteInfo.gallery[i]._id});
            galleryImage.push(image)
        }
        websiteInfo.gallery = galleryImage;

        return res.status(200).send({websiteInfo: websiteInfo});
    } catch (error) {
        return res.status(500).json({messages: "Server error"});
    }
})

module.exports = router;