angular.module('BookingService', [])
  .factory('AvailabilityService', function ($http) {
    let AvailabilityService = {
      getBookings: function (url) {
        return $http.get(url)
      },

      dayMonthYearToDate: function (DMY) {
        return new Date(DMY.year, DMY.month, DMY.day)
      },

      humanDate: function (date) {
        let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
        return date.toLocaleDateString('en-GB', options)
      },

      datesMatch: function (date1, date2) {
        return date1.getTime() === date2.getTime()
      },

      isAvailable: function (availabiltyDMY, bookings = []) {
        let checkDate = this.dayMonthYearToDate(availabiltyDMY)

        for (let i = 0; i < bookings.length; i++) {
          let bookingDate = this.dayMonthYearToDate(bookings[i])

          if (this.datesMatch(checkDate, bookingDate)) {
            return false
          }
        }

        return true
      }
    }

    return AvailabilityService
  })