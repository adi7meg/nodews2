const express = require('express');
const router = express.Router();
const passport = require('passport');


//now i can  acess all  the actions that would be exported in  comments_controller.js
const commentsController = require('../controllers/comments_controller');

//checkAuthentication is a function we created in config>passport.js
router.post('/create',passport.checkAuthentication,commentsController.create);


module.exports = router;

//next step we created this router(comments.js) we need to call it from routes>index.js