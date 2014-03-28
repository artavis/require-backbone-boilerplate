require.config({
	paths: {
		"jquery": "vendor/jquery-1.10.2.min",
		"underscore": "vendor/underscore-min",
		"backbone": "vendor/backbone-min"
	}
});

require(["app"],function(app){
	app.initialize();
});
