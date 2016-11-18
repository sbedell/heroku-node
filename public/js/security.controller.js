angular.module('steveApp').controller('securityController', securityController);

securityController.$inject = ['$scope', 'securityFactory'];

function securityController($scope, securityFactory) {
    $scope.userAgent = navigator.userAgent;
    $scope.monResolution = window.screen.availWidth + ' x ' + window.screen.availHeight;
    $scope.currentResolution = window.innerWidth + ' x ' + window.innerHeight;

    navigator.getBattery().then(function(battery) {
        $scope.batteryLevel = (battery.level * 100) + "%";
        $scope.batteryCharging = battery.charging ? "Yes" : "No";
    });

    toastr.options = {
        "progressBar": true,
        "positionClass": "toast-top-center",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    $scope.searchIpAddr = function() {
        $scope.clearResults(false);
        var ipAddress = document.getElementById("ipaddr").value;

        if (ipAddress.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)) {
            toastr.info("Searching IP Address...");
            securityFactory.searchIpAddr(ipAddress).then(function(result) {
                $scope.ipInfo = result;
                toastr.clear();
            });
        } else {
            $scope.errorMessage = "Invalid IP (ipv4) address.";
        }
    };

    $scope.searchPort = function() {
        $scope.clearResults(false);
        var port = document.getElementById("port").value;
        
        if (port.match(/^\d+$/) && port > 0 && port < 65536) {
            toastr.info("Searching Port...");
            securityFactory.searchPort(port).then(function(result) {
                $scope.portInfo = result;
                toastr.clear();
            });
        } else {
            $scope.errorMessage = "Invalid port number.";
        }
    };

    $scope.clearResults = function(clearInputs) {
        $scope.ipInfo = null;
        $scope.portInfo = null;
        $scope.errorMessage = null;

        if (clearInputs) {
            document.getElementById("port").value = "";
            document.getElementById("ipaddr").value = "";
        }
    }; 
}
