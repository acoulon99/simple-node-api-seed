var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var blogCtrl = require('../controllers/blog.controller.js');

module.exports = function(app) {

	app.route('/api/blog/posts')
		.post(blogCtrl.createPost) 		// create
		.get(blogCtrl.getPostList); 	// list

};