const assert = require('node:assert/strict');

function assertContentType(response, expectedType) {
  const contentType = response.headers.get('content-type');
  assert.ok(contentType && contentType.includes(expectedType));
}

module.exports = { assertContentType };
