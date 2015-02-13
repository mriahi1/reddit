'use strict';

app.factory('Post', function($resource) {
	return $resource(
		'https://boiling-fire-8005.firebaseio.com/posts/:id.json');
});