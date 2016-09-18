let assert = require('assert');
let hello = require('./public/main').hello;
let filter = require('./public/main').filter;
let plural = require('./public/main').plural;
let plur = require('./public/main').plur;

assert.equal(hello('Test'), 'Привет, Test');

assert.equal(plural(0), 'Здравствуй, дух');
assert.equal(plural(1), 'Рады приветствовать на нашем курсе!');
assert.equal(plural(2), 'Кликай дальше!! Еще осталось 13 раз(а)');
assert.equal(plural(13), 'Кликай дальше!! Еще осталось 2 раз(а)');
assert.equal(plural(15), '01001000 01101001 00101100 00100000 01100010 01110010 01101111');
assert.equal(plural(100), '01001000 01101001 00101100 00100000 01100010 01110010 01101111');

assert.equal(hello('Test'), 'Привет, Test');
assert.equal(filter('КЕК ПЕК'), '*** ***');
assert.equal(filter('КЕК ПЕК, Shrek is a kek.'), '*** ***, ***** is a ***.');
assert.equal(filter('shrek must die cause he is a total kek!'),
                    '***** must die cause he is a total ***!');
//TODO: Кейсы для функции filter
// assert.equal(filter('КЕК'), '***');
