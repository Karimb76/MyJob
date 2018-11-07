app.controller('prodCtrl', function($scope, $http, $routeParams) {
  $http.get('article.json')
  .then(function(response) { // si ok
    $scope.articles = response.data;
  }, function(response) { // si ko
    $scope.articles = 'Le Json ne s\'est pas chargé';
  });
  $scope.cat=$routeParams.cat;
  $scope.id=$routeParams.id;

  var valueOld ;
  $scope.noDuplicate=function(value){
    if (value == valueOld)  {
      return true;
    }
    valueOld = value

    return false;
  }
});
