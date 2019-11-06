angular.module('steveApp').controller('securityController', securityController);

securityController.$inject = ['$scope', 'securityFactory'];

function securityController($scope, securityFactory) {
    $scope.userAgent = navigator.userAgent;
    $scope.monResolution = window.screen.availWidth + ' x ' + window.screen.availHeight;
    $scope.currentResolution = window.innerWidth + ' x ' + window.innerHeight;

    // functions:
    $scope.searchIpAddr = searchIpAddress;
    $scope.searchPort = searchPortNumber;
    $scope.clearResults = clearResults;

    toastr.options = {
        "progressBar": true,
        "positionClass": "toast-top-center",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    function searchIpAddress() {
        clearResults(false);
        let ipAddress = document.getElementById("ipaddr").value.trim();

        if (ipAddress.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)) {
            toastr.info("Searching IP Address...");
            securityFactory.searchIpAddr(ipAddress).then(function(result) {
                $scope.ipInfo = result;
                toastr.clear();
            });
        } else {
            $scope.errorMessage = "Invalid IP (ipv4) address.";
        }
    }

    function searchPortNumber() {
        clearResults(false);
        let port = document.getElementById("port").value;
        
        if (port.match(/^\d+$/) && port > 0 && port < 65536) {
            toastr.info("Searching Port...");
            securityFactory.searchPort(port).then(result => {
                $scope.portInfo = result;
                toastr.clear();
            });
        } else {
            $scope.errorMessage = "Invalid port number.";
        }
    }

    function clearResults(clearInputs) {
        $scope.ipInfo = null;
        $scope.portInfo = null;
        $scope.errorMessage = null;

        if (clearInputs) {
            document.getElementById("port").value = "";
            document.getElementById("ipaddr").value = "";
        }
    }
}
