var expect = require('chai').expect;
var starwars = require('./index');


describe('starwars-names',  () => {
    
    describe('method:all', () => {
        
        it('should be an array of strings', () => {
            expect(starwars.all).to.satisfy(isArrayOfString);

            function isArrayOfString(array) {
                return array.every(item => typeof item === 'string');
            }
        });
            
        
        it('should contain Luke Skywalker', () => {
            expect(starwars.all).to.include('Luke Skywalker');
        });

        
        it('should list more than 1 name...', () => {
            expect(starwars.all.length).to.be.above(1);
        });
            
            
    });

    
    describe('method:ramdon', () => {
        
        it('should return a random item from the starwars.all', () => {
            var randomItem = starwars.random();
            expect(starwars.all).to.include(randomItem);
        });    
    });
        
    it('it should works...', () => {
        expect(true).to.be.true;
    });
        
});
    