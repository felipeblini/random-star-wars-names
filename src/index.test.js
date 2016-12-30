var expect = require('chai').expect;
var starwars = require('./index');


describe('starwars-names',  function() {
    
    describe('method:all', function() {
        
        it('should be an array of strings', function() {
            expect(starwars.all).to.satisfy(isArrayOfString);

            function isArrayOfString(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });
        
        it('should contain Luke Skywalker', function() {
            expect(starwars.all).to.include('Luke Skywalker');
        });

        it('should list more than 1 name...', function() {
            expect(starwars.all).to.have.length.above(1);
        });
    });

    describe('method:ramdon', function() {
        
        it('should return a random item from the starwars.all method',
        function () {
            var randomItem = starwars.random();
            expect(starwars.all).to.include(randomItem);
        });  

        it('it should return a array of random names if passed ' +
            'a number and it must me included in the names list',
        function() {
            var randomItems = starwars.random(2);
            
            if(starwars.all.length >= 2) {
                expect(randomItems).to.have.length(2);
            } else {
                expect(randomItems).to.have.length.bellow(3);
            }

            randomItems.forEach(function (item) {
                expect(starwars.all).to.include(item);
            });
        });

        it('it should return a array of 2 random names if ' +
            'passed 2 and the list has 2 or more names', function() {
            var randomItems = starwars.random(2);
            
            if(starwars.all.length >= 2) {
                expect(randomItems).to.have.length(2);
            }
        });
    });
    
    describe('method:byName', function () {
        
        it('should return all names that contains the substring ' +
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
    