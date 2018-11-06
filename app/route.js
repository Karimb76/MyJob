var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/produits.html",
        controller : "prodCtrl"
    })
    // navbar master
    .when("/services", {
        templateUrl : "view/services.html",
        controller : "prodCtrl"
    })
    // navbar left
    .when("/produits", {
        templateUrl : "view/produits.html",
        controller : "prodCtrl"
    })
    .when("/produits/:cat", {
        templateUrl : "view/produits.html",
        controller : "prodCtrl"
    })
    .when("/produit/:id", {
        templateUrl : "view/produit.html",
        controller : "prodCtrl"
    })
    .when("/service/:id", {
        templateUrl : "view/service.html",
        controller : "prodCtrl"
    })
    .when("/services/:cat", {
        templateUrl : "view/services.html",
        controller : "prodCtrl"
    });
});




// html#!/produits/Programme Hydratation Intense
