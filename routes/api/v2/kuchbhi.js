const express = require('express');
const router = express.Router();
const kuchbhiApi = require('../../../controllers/api/v2/kuchbhi_api');


router.get('/',kuchbhiApi.hui)



module.exports = router;