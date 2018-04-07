angular.module('WebApp', ['ngRoute', 'RouteControllers'])

angular.module('WebApp')
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true)

    $routeProvider.when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
  })