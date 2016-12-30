var expect = require('chai').expect;
var starwars = require('./index');


describe('starwars-names',  function() {
    
    describe('method:all', function() {
        
        it('Should be an array of strings', function() {
            expect(starwars.all).to.satisfy(isArrayOfString);

            function isArrayOfString(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });
        
        it('Should contain Luke Skywalker', function() {
            expect(starwars.all).to.include('Luke Skywalker');
        });

        it('Should list more than 1 name...', function() {
            expect(starwars.all).to.have.length.above(1);
        });
    });

    describe('method:ramdon', function() {
        
        it('Should return a random item from the starwars.all method',
        function () {
            var randomItem = starwars.random();
            expect(starwars.all).to.include(randomItem);
        });  

        it('Should return an array of random names with size of the ' +
            ' number passed as a parameter',
        function() {
            var randomItems = starwars.random(2);
            
            if(starwars.all.length >= 2) {
                // if the list have at least 2 names, the returned
                // array must have obligatorily 2 item
                expect(randomItems).to.have.length(2);
            } else {
                expect(randomItems).to.have.length.bellow(2);
            }
        });

        it('Should return a array of 1 random name if passed 1 as a parameter' +
            ' and the list have at least 1 name', function() {
            var randomItems = starwars.random(1);
            
            if(starwars.all.length >= 1) {
                expect(randomItems).to.have.length(1);
            }
        });

        it('Should return a array of 5 random names if passed 2 as a parameter' +
            ' and the list have at least 5 names', function() {
            var randomItems = starwars.random(5);
            
            if(starwars.all.length >= 5) {
                expect(randomItems).to.have.length(5);
            }
        });
    });
    
    describe('method:byName', function () {
        
        it('Should return all names that contains the substring ' +
            'passed as a parameter', function() {
            expect(starwars.byName('Luke Skywalker'))
                .to.contains('Luke Skywalker');
        });
    });

    describe('method:checkName', function() {
        
        it('Should returns true when passing Luke Skywalker as parameter',
        function() {
            expect(starwars.checkName('Luke Skywalker'))
                .to.be.true;
        });

        it('Should returns false when passing inexistent name as parameter',
        function() {
            expect(starwars.checkName('+#abcd|{}'))
                .to.be.false;
        });
            
    });
        
});
    