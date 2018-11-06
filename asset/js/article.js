myApp.controller('prodCtrl', function($scope, $http) {
  $http.get('../json/article.json') .then(function(response) {
    $scope.article = response.data;
  });
});
