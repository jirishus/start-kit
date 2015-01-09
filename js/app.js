var app = angular.module('app', ['ui.router','ui.bootstrap','ngAnimate']);


// UI-ROUTER
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    
    $urlRouterProvider.otherwise('/app');

    $stateProvider
        .state('app', {
            url:'/app',
            templateUrl:'views/build/app.html',
            controller:'appCtrl'
        })
        .state('app.login', {
            url:'/login',
            templateUrl:'views/build/login.html',
            controller:'loginCtrl'
        })
        .state('app.about', {
            url:'/about',
            templateUrl:'views/build/about.html',
            controller:'aboutCtrl'
        })
        .state('app.mail', {
            url:'/mail',
            templateUrl:'views/build/mail.html',
            controller:'mailCtrl'
        })
        .state('app.mail.single', {
            url:'/single',
            templateUrl:'views/build/mail.single.html',
            controller:function($scope) {
                // some small change
            }
        });


});


// RUN BLOCK
