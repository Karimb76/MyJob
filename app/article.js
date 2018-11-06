var app = angular.module('myApp', []);

app.controller('prodCtrl', function($scope, $http) {
  $http.get('article.json')
    .then(function(response) { // si ok
    $scope.articles = response.data;
  }, function(response) { // si ko
    $scope.articles = 'Le Json ne s\'est pas chargé';
  });
});
