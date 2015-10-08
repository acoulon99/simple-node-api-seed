var _ = require('lodash');

module.exports = _.extend(
	require('./environments/all'),
	require('./environments/' + process.env.NODE_ENV) || {}
);