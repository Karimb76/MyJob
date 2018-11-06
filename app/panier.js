app.controller('panierCtrl', function($scope, $rootScope, $filter) {
  $rootScope.panier =[];
  $rootScope.referenceExist = function(idProduit){
    var article = $filter('filter')($rootScope.panier, {'idProduit':idProduit});
    if( article.length == 1){
      return article[0];
    }
    return false;
  }
  $rootScope.modifierQTProduitPanier = function(idProduit, qtProduit){
    var n = $rootScope.panier.length;
    for( var i=0; i <n ; i++){
      if( $rootScope.panier[i].idProduit == idProduit ){
        $rootScope.panier[i].qt = qtProduit;
        return $rootScope.panier[i].qt;
      }
    }
    return false;
  }
  $rootScope.ajouterAuPanier = function(idProduit, titreProduit, prixproduit){
    if($rootScope.referenceExist(idProduit) !== false){
      var newQt = $rootScope.referenceExist(idProduit).qt + 1;
      $rootScope.modifierQTProduitPanier(idProduit, newQt);
    }else{
      $rootScope.panier.push({idProduit: idProduit, title: titreProduit, qt: 1, price: prixproduit});
    }
  }
});
