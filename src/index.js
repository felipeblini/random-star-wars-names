'use strict';

const starwarsNamesArray = require('./starwars-names.json');
const uniqueRandomArray = require('unique-random-array');

const getRandomItem = uniqueRandomArray(starwarsNamesArray);

module.exports = {
    all: starwarsNamesArray,
    random: getRandomList,
    byName: getBySubstring
};

function getRandomList(num) {
    if(num === undefined) {
        return getRandomItem();
    } else {
        let items = [];

        for(let i = 0; i < num; i++) {
            items.push(getRandomItem());
        }

        return items;        
    }
}

function getBySubstring(name) {
    return starwarsNamesArray.filter(e => e.includes(name))
}