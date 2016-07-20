angular.module('steveApp').factory('securityFactory', securityFactory);

securityFactory.$inject = ['$http'];

function securityFactory($http) {
    return {
        searchPort: searchPortNumber,
        searchIpAddr: searchIpAddress
    };
    
    function searchPortNumber(portNumber) {
        var url = `https://www.dshield.org/api/port/${portNumber}?json`;
        return httpRequest(url);
    }

    function searchIpAddress(ipAddress) {
        var url = `https://www.dshield.org/api/ip/${ipAddress}?json`;
        return httpRequest(url);
    }

    function httpRequest(url) {
        return $http.get(url).then(function(response) {
            // console.dir(response.data);
            return response.data;
        }).catch(function(error) {
            return "Error " + String(error);
        });
    }
}
