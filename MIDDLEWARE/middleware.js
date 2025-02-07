const multer = require('multer');
const path = require('path');


// File upload setup using multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext)
    }
});

const upload = multer({ 
    storage: storage,
fileFilter: function(req, file, callback){
    if(
        file.mimetype == 'image/jpeg' ||
        file.mimetype == 'image/png' 
    )
    {
        callback(null, true);
    }
    else{
        console.log('only jpg & png file supported!');
        callback(null, false);
    }
},
limits: { fileSize: 5000000 } // 5MB
 });

module.exports = upload;