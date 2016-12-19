var expect = require('chai').expect;
var starwars = require('./index');


describe('starwars-names',  () => {
    
    describe('all', () => {
        
        it('should be an array of strings', () => {
            expect(starwars.all).to.satisfy(isArrayOfString);

            function isArrayOfString(array) {
                return array.every(item => typeof item === 'string');
            }
        });
            
        
        it('should contain Luke Skywalker', () => {
            expect(starwars.all).to.include('Luke Skywalker');
        });
            
    });

    
    describe('ramdon', () => {
        
        it('should return a random item from the starwars.all', () => {
            var randomItem = starwars.random();
            expect(starwars.all).to.include(randomItem);
        });
            
    });
        
        
    
    it('it should works...', () => {
        expect(true).to.be.true;
    });
        
});
    