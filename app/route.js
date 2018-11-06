var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/produits.html",
        controller : "prodCtrl"
    })
    // navbar master
    // .when("/service", {
    //     templateUrl : "view/service.html",
    //     controller : "prodCtrl"
    // })
});
