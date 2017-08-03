angular.module('steveApp').controller('vibrateController', vibrateController);

vibrateController.$inject = ['$scope'];

function vibrateController($scope) {
    $scope.multipleVibrate = multipleVibrations;
    $scope.singleVibrate = singleVibration;
    $scope.stopVibrate = stopVibrations;

    function stopVibrations() {
        navigator.vibrate(0);
        $scope.errorMessage = null;
    }

    // Vibrates once, duration determined by user.
    function singleVibration() {
        var duration = document.getElementById("viblen").value;
        // Validate user input (for numbers)
        if (duration.match(/^\d+$/)) {
            $scope.errorMessage = null;
            navigator.vibrate(duration);
        } else {
            $scope.errorMessage = "Error, please input a number for Vibration Duration.";
        }
    }

    // Start persistent vibration at given duration and interval
    // Assumes a number value is given
    function multipleVibrations() {
        var vibArray = [];
        var duration = document.getElementById("viblen").value;
        var amountOfVibs = document.getElementById("vibinterval").value;
        var pauseLength = document.getElementById("pauselen").value;

        if ((!duration.match(/^\d+$/)) || (!amountOfVibs.match(/^\d+$/))) {
            $scope.errorMessage = "Error, please input a number in both fields.";
        } else {
            $scope.errorMessage = null;
            for (var i = 0; i < amountOfVibs; i++) {
                vibArray.push(duration);
                vibArray.push(pauseLength);
            }
            navigator.vibrate(vibArray);
        }
    }
}
