var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/home', {
          templateUrl: '/views/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })
        .when ('/development', {
            templateUrl: '/views/development.html',
            controller: 'DevelopmentController',
            controllerAs: 'dc'
        })
        .when ('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'ContactController',
            controllerAs: 'cc'
        })
        .when ('/email', {
          templateUrl: '/views/email.html',
          controller: 'EmailController',
          controllerAs: 'ec'
        })
        .when ('/bio', {
          templateUrl: '/views/bio.html'
        })
        .when ('/resume', {
          templateUrl: '/views/resume.html'
        })
        .otherwise ( {
            redirectTo: '/home'
        });
}]);
