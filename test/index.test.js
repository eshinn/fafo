'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { helloWorld } = require('../index.js');

test('helloWorld returns Hello, World!', () => {
  assert.equal(helloWorld(), 'Hello, World!');
});
