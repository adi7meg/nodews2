//CREATING SCHEMA


const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,   //reference. a post is linked to a user. it need to refers to a users schema
        ref: 'User'
    },
}, {
    timestamps:true
})

const Post = mongoose.model('Post',postSchema);

module.exports = Post;
