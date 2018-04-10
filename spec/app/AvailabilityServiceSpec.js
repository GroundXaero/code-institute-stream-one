describe('BookingService', function () {
  beforeEach(module('WebApp'))

  let $scope, controller
  beforeEach(inject(function (_$controller_) {
    $scope = {}
    controller = _$controller_('BookingsController', { $scope: $scope })
  }))

  // Sample data
  let sampleDate1 = new Date(2018, 3, 10)
  let sampleDate1Identical = new Date(2018, 3, 10)
  let sampleDate2 = new Date(2018, 4, 15)

  let sampleDMY = { day: 10, month: 3, year: 2018 }
  let sampleDMY2 = { day: 15, month: 3, year: 2018 }

  let bookings = [
    { day: 10, month: 3, year: 2018 },
    { day: 12, month: 5, year: 2019 }
  ]

  describe('AvailabilityService.dayMonthYearToDate', function () {
    it('converts numerical day / month / year object to a Date object', inject(function (AvailabilityService) {
      // Check same match works
      expect(AvailabilityService.dayMonthYearToDate(sampleDMY))
        .toEqual(sampleDate1)

      // Check different dates fails
      expect(AvailabilityService.dayMonthYearToDate(sampleDMY))
        .not.toEqual(sampleDate2)
    }))
  })

  describe('AvailabilityService.humanDate', function () {
    it('outputs Date object to a human readable format', inject(function (AvailabilityService) {
      expect(AvailabilityService.humanDate(sampleDate1)).toEqual('Tuesday, 10 April 2018')

      expect(AvailabilityService.humanDate(sampleDate2)).toEqual('Tuesday, 15 May 2018')
    }))
  })

  describe('AvailabilityService.datesMatch', function () {
    it('compares two Date objects to see if they match', inject(function (AvailabilityService) {
      // Identical dates should match
      expect(AvailabilityService.datesMatch(sampleDate1, sampleDate1Identical)).toEqual(true)
      // Different dates should mismatch
      expect(AvailabilityService.datesMatch(sampleDate1, sampleDate2)).toEqual(false)
    }))
  })

  describe('AvailabilityService.isAvailable', function () {
    it('checks if the desired day/month/year is available from the current booking dates', inject(function (AvailabilityService) {
      // Compare a date that exists in bookings array
      expect(AvailabilityService.isAvailable(sampleDMY, bookings)).not.toEqual(true)

      // Compare a date that doesn't exist in bookings array
      expect(AvailabilityService.isAvailable(sampleDMY2, bookings)).not.toEqual(false)
    }))
  })
})