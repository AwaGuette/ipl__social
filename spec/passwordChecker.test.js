import {Main} from '../src/passwordChecker.js';

describe("function should return true", function() {
    
    it("", function() {
        let main = new Main();

        let result = main.isValidePassword("123456");
     
        expect(result).toBe(true);
    });
    
});