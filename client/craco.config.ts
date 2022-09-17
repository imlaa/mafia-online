// @ts-ignore
const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src', 'assets'),
			'@components': path.resolve(__dirname, 'src', 'components'),
			'@models': path.resolve(__dirname, 'src', 'models'),
			'@modules': path.resolve(__dirname, 'src', 'modules'),
			'@routes': path.resolve(__dirname, 'src', 'routes'),
		},
	},
};