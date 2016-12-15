'use strict';

var starwarsNamesArray = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
    all: starwarsNamesArray,
    random: uniqueRandomArray(starwarsNamesArray)
}