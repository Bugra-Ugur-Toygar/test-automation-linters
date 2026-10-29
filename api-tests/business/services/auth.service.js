const BaseService = require('../../core/base.service');

class AuthService extends BaseService {
  createToken(credentials) {
    return this.request('POST', '/auth', {
      body: credentials,
    });
  }
}

module.exports = AuthService;
