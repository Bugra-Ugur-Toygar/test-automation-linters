const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

const { baseUrl, credentials } = require('../config/api.config');
const { assertContentType } = require('../../core/assertion.helper');
const AuthService = require('../../business/services/auth.service');
const BookingService = require('../../business/services/booking.service');
const { booking, updatedBooking } = require('../../business/data/booking.data');

const authService = new AuthService(baseUrl);
const bookingService = new BookingService(baseUrl);

let token;
let bookingId;

describe('booking', { concurrency: false }, () => {
  it('create a token', async () => {
    const response = await authService.createToken(credentials);

    assert.equal(response.status, 200);
    assertContentType(response, 'application/json');
    const body = await response.json();
    assert.equal(typeof body.token, 'string');
    token = body.token;
  });

  it('create a booking', async () => {
    const response = await bookingService.createBooking(booking);

    assert.equal(response.status, 200);
    assertContentType(response, 'application/json');
    const body = await response.json();
    assert.equal(typeof body.bookingid, 'number');
    assert.deepEqual(body.booking, booking);
    bookingId = body.bookingid;
  });

  it('get the created booking', async () => {
    const response = await bookingService.getBookingById(bookingId);

    assert.equal(response.status, 200);
    assertContentType(response, 'application/json');
    const body = await response.json();
    assert.deepEqual(body, booking);
  });

  it('update the booking', async () => {
    const response = await bookingService.updateBooking(bookingId, updatedBooking, token);

    assert.equal(response.status, 200);
    assertContentType(response, 'application/json');
    const body = await response.json();
    assert.deepEqual(body, updatedBooking);
  });

  it('remove the booking', async () => {
    const response = await bookingService.deleteBooking(bookingId, token);

    assert.equal(response.status, 201);
    assertContentType(response, 'text/plain');
    const body = await response.text();
    assert.equal(body, 'Created');
  });
});
