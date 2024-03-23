const app = angular.module("NearbyApp", ["leaflet-directive", "ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "views/main.html",
        controller: "MainController"
    })
    .when('/search', {
        templateUrl: "views/search.html",
        controller: "SearchController"
    })
    .otherwise({
        redirectTo: '/'
    });
})