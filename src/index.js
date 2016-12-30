'use strict';

const starwarsNamesArray = require('./starwars-names.json');
const uniqueRandomArray = require('unique-random-array');

const getRandomItem = uniqueRandomArray(starwarsNamesArray);

module.exports = {
    all: starwarsNamesArray,
    random: getRandomList,
    byName: getBySubstring,
    checkName: checkIfNameExists
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
    return starwarsNamesArray.filter(function(e) {
        return e.includes(name);
    });
}

function checkIfNameExists(name) {
    var namesFound = starwarsNamesArray.filter(function(e) {
        return e === name;
    });

    return namesFound.length > 0 ? true : false;
}