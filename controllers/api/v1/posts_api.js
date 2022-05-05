module.exports.index = function(req,res){
    return res.json(200,{
        messsage: "List of posts",
        posts: []
    })
}