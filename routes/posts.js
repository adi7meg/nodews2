const express = require('express');
const router = express.Router();


//now i can  acess all  the action s that would be exported in  posts_controller.js
const postsController = require('../controllers/posts_controller');
router.post('/create',postsController.create);


module.exports = router;

//next step we created this router(post.js) we need to call it from routes>index.js