angular.module('RouteControllers', [])
  .controller('HomeController', function ($scope) { })

  .controller('BookingsController', function ($scope, AvailabilityService) {
    $scope.bookings = []
    $scope.readableBookings = []

    AvailabilityService.getBookings('data/bookings.json')
      .then(function (results) {
        // Get the raw data for further use
        $scope.bookings = results.data || []

        // Store a human readable format for display of upcoming projects
        for (let i = 0; i < results.data.length; i++) {
          let date = AvailabilityService.dayMonthYearToDate(results.data[i])
          $scope.readableBookings.push(AvailabilityService.humanDate(date))
        }
      }).catch(function (err) {
        console.log(err)
      })

    $scope.submitForm = function () {
      if ($scope.availabilityForm.$valid) {
        if (AvailabilityService.isAvailable($scope.availabiltyFormData, $scope.bookings)) {
          $scope.response = {
            type: 'free',
            text: 'We\'re free this day! Let\'s get in touch!',
            class: 'alert-success'
          }
        } else {
          $scope.response = {
            type: 'busy',
            text: 'We\'re busy this day, please try another or get in contact with us to figure out a date.',
            class: 'alert-info'
          }
        }
      } else {
        $scope.response = {
          type: 'error',
          text: 'There was an error with the form, please try again.',
          class: 'alert-danger'
        }
      }
    }
  })