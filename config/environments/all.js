module.exports = {
	app: {
		title: 'Simple Node API Seed Project',
		description: ' - '
	},
	port: process.env.PORT || 3000,
	ssl: {
		enabled: false,
		key: null,
		cert: null
	},
	auth: {
		secret: '123itsnotme'
	},
	upload: {
		loc: './uploads'
	}
};
