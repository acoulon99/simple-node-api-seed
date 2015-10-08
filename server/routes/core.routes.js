var coreCtrl = require('../controllers/core.controller.js');

module.exports = function(app) {

	// API welcome
	app.route('/api')
		.get(coreCtrl.helloApi);

};