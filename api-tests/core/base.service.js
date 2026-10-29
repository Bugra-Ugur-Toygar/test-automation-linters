class BaseService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(method, path, { headers, body }) {
    const options = { method };

    if (body !== undefined) {
      options.headers = {
        'Content-Type': 'application/json',
        ...headers,
      };
      options.body = JSON.stringify(body);
    } else {
      options.headers = headers;
    }

    return fetch(`${this.baseUrl}${path}`, options);
  }
}

module.exports = BaseService;
