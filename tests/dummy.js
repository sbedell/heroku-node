var myDummy = (function() {
    'use strict';

    return {
        genericAdder: genericAdder,
        convertCtoF: convertCtoF,
        convertFtoC: convertFtoC
    };

    function genericAdder(a, b) {
        return a + b;
    }

    function convertFtoC(temp) {
      return Math.round((temp - 32) * (5/9));
    } 

    function convertCtoF(temp) {
      return Math.round((temp * (9/5)) + 32);
    }
})();
