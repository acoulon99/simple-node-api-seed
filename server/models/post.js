var mongoose = require('mongoose');  
var mongoosePaginate = require('mongoose-paginate');

var PostSchema = new mongoose.Schema({  
	title: 			{ type: String },
	date: 			{ type: Date, default: Date.now },
	videoUrl: 		{ type: String },
	description: 	{ type: String },
	category: 		{ type: String }, 
	tags: 		   	[{ type: String }]
});

PostSchema.plugin(mongoosePaginate);
mongoose.model('Post', PostSchema);