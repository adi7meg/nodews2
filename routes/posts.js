const express = require('express');
const router = express.Router();
const passport = require('passport');


//now i can  acess all  the action s that would be exported in  posts_controller.js
const postsController = require('../controllers/posts_controller');

//checkAuthentication is a function we created in config>passport.js
router.post('/create',passport.checkAuthentication,postsController.create);

router.get('/destroy/:id',passport.checkAuthentication,postsController.destroy);

module.exports = router;

//next step we created this router(post.js) we need to call it from routes>index.js