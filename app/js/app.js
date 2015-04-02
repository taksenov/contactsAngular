/**
 * Created by admin on 02.04.2015.
 */

var app = angular.module('app', ['ngRoute', 'firebase']);

app.value({
    'fbURL': 'https://contactsangular.firebaseio.com/'
});

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'view/lines-index.html',
			controller: 'LinesIndexCtrl'
		})
		.when('/mosaic', {
			templateUrl: 'view/mosaic.html',
			controller: 'MosaicCtrl'
		})
		.when('/edit', {
			templateUrl: 'view/editcontact.html',
			controller: 'EditContactCtrl'
		})
		.otherwise({ redirectTo: '/' });
}]);

