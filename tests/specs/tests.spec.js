'use strict';

describe('dummy test file', function() {
    var testDummy;
    
    beforeEach(function() {
        testDummy = myDummy;
    });

    it('should exist', function() {
      expect(testDummy).toBeDefined();
    });

    describe("Generic adder function given 2 and 3", function() {
      it("should return 5", function() {
          var results = testDummy.genericAdder(2, 3);

          expect(results).toBe(5);
      });
    });

    describe("Temp conversion functions", function() {
      it("should return 32 given 0 via C-to-F", function() {
        var result = testDummy.convertCtoF(0);

        expect(result).toBe(32);
      });

      it("should return 0 given 32 on F-to-C", function() {
        var result = testDummy.convertFtoC(32);

        expect(result).toBe(0);
      });
    });
});
