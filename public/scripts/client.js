var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/home', {
          templateUrl: '/views/home-view.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })
        .when ('/view-1', {
            templateUrl: '/views/view_1.html',
            controller: 'OneController',
            controllerAs: 'one'
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
