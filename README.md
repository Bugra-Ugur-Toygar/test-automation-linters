# test-automation-linters

`ui-tests` is a WebdriverIO, Mocha, and Chai suite for the Practice Software Testing shop. `api-tests` is a Node.js test suite for the restful-booker API.

## Install

From the repository root:

```
npm ci
```

Then install each project:

```
cd ui-tests
npm ci
```

```
cd api-tests
npm ci
```

## Tests

UI tests, from `ui-tests`:

```
npm test
```

API tests, from `api-tests`:

```
npm run test:api
```

## Linters

From the repository root:

```
npm run lint:eslint
npm run lint:prettier
```

## CI

The CI workflow runs the lint job first. The UI and API test jobs start only after that job succeeds.
