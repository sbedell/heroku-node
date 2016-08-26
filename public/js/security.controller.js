angular.module('steveApp').controller('securityController', securityController);

securityController.$inject = ['$scope', 'securityFactory'];

function securityController($scope, securityFactory) {
    $scope.userAgent = navigator.userAgent;
    $scope.monResolution = `${window.screen.availWidth} x ${window.screen.availHeight}`;
    $scope.currentResolution = `${window.innerWidth} x ${window.innerHeight}`;

    navigator.getBattery().then(battery => {
        updateLevelInfo();
        updateChargeInfo();
        updateChargingInfo();
        updateDischargingInfo();

        // Add battery event listeners
        battery.addEventListener('chargingchange', function() {
            updateChargeInfo();
        });

        battery.addEventListener('levelchange', function(){
            updateLevelInfo();
        });

        battery.addEventListener('chargingtimechange', function() {
            updateChargingInfo();
        });

        battery.addEventListener('dischargingtimechange', function() {
            updateDischargingInfo();
        });

        // Battery functions to update the scope variables
        function updateChargeInfo() {
            $scope.batteryCharging = battery.charging ? "Yes" : "No";
        }
        
        function updateLevelInfo() {
            $scope.batteryLevel = (battery.level * 100) + "%";
        }

        
        function updateChargingInfo() {
            $scope.chargingTime = battery.chargingTime + " seconds";
        }

        
        function updateDischargingInfo() {
            $scope.dischargingTime = battery.dischargingTime + " seconds";
        }
    });

    $scope.searchIpAddr = function() {
        $scope.clearResults(false);
        var ipAddress = document.getElementById("ipaddr").value;

        if (ipAddress.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)) {
            securityFactory.searchIpAddr(ipAddress).then(function(result) {
                $scope.ipInfo = result;
            });
        } else {
            $scope.errorMessage = "Invalid IP (ipv4) address.";
        }
    };

    $scope.searchPort = function() {
        $scope.clearResults(false);
        var port = document.getElementById("port").value;
        
        if (port.match(/^\d+$/) && port > 0 && port < 65536) {
            securityFactory.searchPort(port).then(function(result) {
                $scope.portInfo = result;
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
