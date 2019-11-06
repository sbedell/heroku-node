angular.module('steveApp').controller('appController', appController);

appController.$inject = ['$scope'];

function appController($scope) {
    $scope.hideDegSymbol = true;

    $scope.products = [
        {
            name: 'Kiwi',
            price: 0.75
        },
        {
            name: 'Gnocchi',
            price: 2.99
        },
        {
            name: 'Earl Grey Tea',
            price: 0.50
        },
        {
            name: 'Cherries',
            price: 5.00
        }
    ];

    $scope.convertTemp = function(type) {
        let temp = parseInt(document.getElementById("temp").value);
        
        if (isNaN(temp)) {
            $scope.temperature = "Error, please enter a number.";
            $scope.hideDegSymbol = true;
        } else {
            if (type === "C") {
                $scope.temperature = Math.round((temp - 32) * (5/9)) + " " + type;
            } else if (type === "F") {
                $scope.temperature = Math.round((temp * (9/5)) + 32) + " " + type;
            }
            $scope.hideDegSymbol = false;
        }
    };
}