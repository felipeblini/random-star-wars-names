const expect = require('chai').expect;
const starwars = require('./index');


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
            expect(starwars.all).to.have.length.above(1);
        });
    });

    describe('method:ramdon', () => {
        
        it('should return a random item from the starwars.all method', () => {
            const randomItem = starwars.random();
            expect(starwars.all).to.include(randomItem);
        });  

        it('it should return a array of random names if passed ' +
         'a number and it must me included in the names list', () => {
            const randomItems = starwars.random(2);
            
            if(starwars.all.length >= 2) {
                expect(randomItems).to.have.length(2);
            } else {
                expect(randomItems).to.have.length.bellow(3);
            }

            randomItems.forEach(item => {
                expect(starwars.all).to.include(item);
            });
        });

        it('it should return a array of 2 random names if ' +
            'passed 2 and the list has 2 or more names', () => {
            const randomItems = starwars.random(2);
            
            if(starwars.all.length >= 2) {
                expect(randomItems).to.have.length(2);
            }
        });
    });

    
    describe('method:byName', () => {
        
        it('should return all names that contains the substring ' +
            'passed as a parameter', () => {
            expect(starwars.byName('Luke Skywalker'))
                .to.contains('Luke Skywalker');
        });
            
    });
        
});
    