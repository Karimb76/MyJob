var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/produits.html",
        controller : "prodCtrl"
    })
    // navbar master
    .when("/service", {
        templateUrl : "view/service.html",
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
    .when("/service/:cat", {
        templateUrl : "view/service.html",
        controller : "prodCtrl"
    });
});




// html#!/produits/Programme Hydratation Intense
