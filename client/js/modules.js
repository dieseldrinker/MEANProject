var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'RecipesController',
		controllerAs: 'rc',
		templateUrl: '/partials/home.partial.html'
	})
	.when('/recipes/build', {
		controller: 'RecipesBuilder',
		controllerAs: 'rb',
		templateUrl: '/partials/buildarecipe.partial.html'
	})
	.when('/users/details', {
		controller: 'UserController',
		controllerAs: 'userCtrl',
		templateUrl: '/partials/user.partial.html'
	})
	
	.otherwise('/')
})