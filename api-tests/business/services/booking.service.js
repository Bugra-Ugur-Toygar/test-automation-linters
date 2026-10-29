const BaseService = require('../../core/base.service');

const acceptHeader = {
  Accept: 'application/json',
};

class BookingService extends BaseService {
  createBooking(booking) {
    return this.request('POST', '/booking', {
      headers: acceptHeader,
      body: booking,
    });
  }

  getBookingById(bookingId) {
    return this.request('GET', `/booking/${bookingId}`, {
      headers: acceptHeader,
    });
  }

  updateBooking(bookingId, booking, token) {
    return this.request('PUT', `/booking/${bookingId}`, {
      headers: {
        ...acceptHeader,
        Cookie: `token=${token}`,
      },
      body: booking,
    });
  }

  deleteBooking(bookingId, token) {
    return this.request('DELETE', `/booking/${bookingId}`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
  }
}

module.exports = BookingService;
