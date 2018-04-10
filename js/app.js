angular.module('WebApp', [
  'ngRoute',
  'RouteControllers',
  'BookingService',
  'BookingDirective'
])

angular.module('WebApp')
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true)

    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })

      .when('/book', {
        templateUrl: 'templates/bookings.html',
        controller: 'BookingsController'
      })
  })