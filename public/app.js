angular.module('steveApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'templates/partial-home.html'
    })

    .state('home.list', {
        url: '/list',
        templateUrl: 'templates/partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Lab'];
        }
    })

    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a break right now.'
    })
    
    // ABOUT PAGE AND MULTIPLE NAMED VIEWS
    .state('demo', {
        url: '/demo',
        views: {
            //relatively named?
            '': {
                templateUrl: 'templates/multipleViewsPage.html'
            },
            'columnOne@demo': {
                templateUrl: 'templates/partial-temps.html',
                controller: 'appController'
            },
            'columnTwo@demo': {
                templateUrl: 'templates/table-data.html',
                controller: 'appController'
            }
        } 
    })

    .state('resume', {
        url: '/resume',
        templateUrl: 'templates/resumePage.html'
    })

    .state('security', {
        url: '/security',
        templateUrl: 'templates/security.html',
        controller: 'securityController'
    })

    .state('soundboard', {
        url: '/soundboard',
        templateUrl: 'templates/soundboard.html'
    })
    
    .state('soundcloud', {
        url: '/soundcloud',
        templateUrl: 'templates/soundcloud.html',
        controller: 'soundcloudController'
    })
    
    .state('storageDemo', {
        url: '/storagedemo',
        templateUrl: 'templates/storagedemo.html',
        controller: 'storageController'
    })
    
    .state('vibrateDemo', {
        url: '/vibrate',
        templateUrl: 'templates/vibrate.html',
        controller: 'vibrateController'
    });
});