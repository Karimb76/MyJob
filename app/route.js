var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/produits.html"
    })
    // navbar master
    .when("/service", {
        templateUrl : "view/service.html",
        controller : "prodCtrl"
    })
    .when("/produits", {
        templateUrl : "view/produits.html",
        controller : "prodCtrl"
    })
    // navbar left
    .when("/produits/pier-huge/", {
        templateUrl : "view/produits/pier-huge.html"
    });
});
