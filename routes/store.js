const express = require('express');
const router = express.Router();
const Store = require('../models/Store');
const multer = require('multer');

// set storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
const upload = multer({ storage: storage })

// router.post('/uploadImage', upload.single('image'), (req, res, next) => {
 
//     var obj = {
//         name: req.body.name,
//         desc: req.body.desc,
//         img: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     imgModel.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             // item.save();
//             res.redirect('/');
//         }
//     });
// });

// @route POST /store
// @access Private
// @desc Create a store
router.post('/', upload.single('main_photo'), upload.array('gallery', 6), async (req, res) => {
    console.log(req.body);
    try {

        const galleryInfo = []
        for (let i = 0; i < 6; i++) {
            gallery.push({
                data: fs.readFileSync(path.join('./uploads/' + req.body.gallery[i].name)),
                contentType: req.body.gallery[i].type
            })
        }

        const store = new Store({
            site_name: req.body.site_name,
            url_extension: req.body.url_extension,
            main_photo: {
                data: fs.readFileSync(path.join('./uploads/' + req.body.main_photo.name)),
                contentType: req.body.main_photo.type
            },
            gallery: galleryInfo
        });
        await store.save();

        return res.status(200).json({messages: 'Create Store Success'});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({messages: "Server error"});
    }
})

// @route GET /:urlExt
// @access Private
// @desc Get a store
router.get('/:urlExt', async (req, res) => {
    try {
        const url_ext = req.params.urlExt;
        const websiteJSON = Store.find({url_extension: url_ext});

        return res.status(200).json({WebsiteInfo: websiteJSON});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({messages: "Server error"});
    }
})

module.exports = router;