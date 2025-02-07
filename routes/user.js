const router = require('express').Router();
const upload = require('../middleware/middleware');
const Create = require('../controller/user');

router.post('/', upload.single('attachment'), Create)
module.exports = router