angular.module('steveApp').controller('securityController', securityController);

securityController.$inject = ['$scope', 'securityFactory'];

function securityController($scope, securityFactory) {
    $scope.userAgent = navigator.userAgent;
    $scope.monResolution = `${window.screen.availWidth} x ${window.screen.availHeight}`;
    $scope.currentResolution = `${window.innerWidth} x ${window.innerHeight}`;
    $scope.batteryInfo = navigator.battery ? `${navigator.battery.level * 100}%` : "None";

    toastr.options = {
        "progressBar": true,
        "positionClass": "toast-top-center",
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    $scope.searchIpAddr = function() {
        $scope.clearResults(false);
        var ipAddress = document.getElementById("ipaddr").value;

        if (ipAddress.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)) {
            toastr.info("Searching...");
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
            toastr.info("Searching...");
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
