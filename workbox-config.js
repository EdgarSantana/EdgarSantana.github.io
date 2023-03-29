module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,woff,eot,svg,ttf,woff2,otf,png,gif,jpg,js,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};