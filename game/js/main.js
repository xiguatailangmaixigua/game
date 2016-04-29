// script.js
 
// create the module and name it scotchApp
    // also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);
// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider
 
        // route for the home page
        .when('/', {
            templateUrl : 'pages/game/index.html',
            controller  : 'mainController'
        })
 
        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
 
        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});
 
