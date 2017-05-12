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
        .otherwise ( {
            redirectTo: '/home'
        });
}]);
