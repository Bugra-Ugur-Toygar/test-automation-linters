const booking = {
  firstname: 'Jim',
  lastname: 'Brown',
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: '2018-01-01',
    checkout: '2019-01-01',
  },
  additionalneeds: 'Breakfast',
};

const updatedBooking = {
  firstname: 'James',
  lastname: 'Brown',
  totalprice: 222,
  depositpaid: false,
  bookingdates: {
    checkin: '2018-02-01',
    checkout: '2019-02-01',
  },
  additionalneeds: 'Lunch',
};

module.exports = {
  booking,
  updatedBooking,
};
