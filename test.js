let assert = require('assert');
let hello = require('./public/main').hello;
let filter = require('./public/main').filter;



assert.equal(hello('Test'), 'Привет, Test');
assert.equal(filter('КЕК ПЕК'), '*** ***');
assert.equal(filter('КЕК ПЕК, Shrek is a kek.'), '*** ***, ***** is a ***.');
assert.equal(filter('shrek must die cause he is a total kek!'),
                    '***** must die cause he is a total ***!');
assert.equal(filter('КЕК KЕK'), '*** ***')
//TODO: Кейсы для функции filter
// assert.equal(filter('КЕК'), '***');
