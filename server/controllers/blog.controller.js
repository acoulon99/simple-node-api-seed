var mongoose = require('mongoose');
var Post = mongoose.model('Post');

/**
 * Create Post
 */
exports.createPost = function(req, res){
	
	// create and save the new post
	var post = new Post(req.body);
	post.save(function(err){
		if(err){
			res.status(400).json({
				message: "There was a problem creating a new post"
			});
		} else {
			res.status(200).json(post);
		}
	});
};

/**
 * Get Post List
 */
exports.getPostList = function(req, res){

	// get pagination parameters
	var page = req.query.page || 1;
	var perPage = req.query.perPage || 10;
	
	// get and return the list of posts
	Post.paginate({},{page:page, limit: perPage}, function(err, postList){
		if(err){
			res.status(400).json({
				message: "There was a problem getting the list of posts"
			});
		} else {
			res.status(200).json(postList);
		}
	});
};