angular.module('BookingDirective', [])
  .directive('bookingTable', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/booking-table.html'
    }
  })

  .directive('availabilityForm', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/availability-form.html'
    }
  })