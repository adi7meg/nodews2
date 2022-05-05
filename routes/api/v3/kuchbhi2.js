const express = require('express');
const router = express.Router();
const kuchbhiApi2 = require('../../../controllers/api/v3/kuchbhi_api2');


router.get('/',kuchbhiApi2.hue);


module.exports = router;