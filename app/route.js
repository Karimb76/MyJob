var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/produits.html"
    })
    // navbar master
    .when("/produits", {
        templateUrl : "view/produits.html"
    })
    // navbar left
    .when("/produits/pier-huge/", {
        templateUrl : "view/produits/pier-huge.html"
    });
});
