let assert = require('assert');
let hello = require('./public/main').hello;
let filter = require('./public/main').filter;



assert.equal(hello('Test'), 'Привет, Test');
assert.equal(filter('КЕК ПЕК'), '*** ***');
//TODO: Кейсы для функции filter
// assert.equal(filter('КЕК'), '***');
