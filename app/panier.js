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
    if(qtProduit <= 0){
      $rootScope.supprimerDuPanier(idProduit);
      return false;
    }
    var n = $rootScope.panier.length;
    for( var i=0; i <n ; i++){
      if( $rootScope.panier[i].idProduit == idProduit ){
        $rootScope.panier[i].qt = qtProduit;
        return $rootScope.panier[i].qt;
      }
    }
    return false;
  }
  $rootScope.produitPanierQuantitePlus = function(itemArticle){
    itemArticle.qt = itemArticle.qt +1;
  }
  $rootScope.produitPanierQuantiteMoins = function(itemArticle){
    itemArticle.qt = itemArticle.qt -1;
    console.log(itemArticle.id)
    if(itemArticle.qt <= 0){
      var n = $rootScope.panier.length;
      for( var i=0; i <n ; i++){
        if( $rootScope.panier[i].idProduit == itemArticle.idProduit ){
          $rootScope.supprimerDuPanier(i);
        }
      }
    }
  }
  $rootScope.ajouterAuPanier = function(idProduit, titreProduit, prixproduit){

    if($rootScope.referenceExist(idProduit) !== false){
      var newQt = Number($rootScope.referenceExist(idProduit).qt) + 1;
      $rootScope.modifierQTProduitPanier(idProduit, newQt);
    }else{
      var prixproduit = prixproduit.replace(",", ".");
      $rootScope.panier.push({idProduit: idProduit, title: titreProduit, qt: 1, price: Number(prixproduit)});
    }
  }

  $rootScope.supprimerDuPanier = function(idProduit){
      $rootScope.panier.splice(idProduit, 1);
  }

  $rootScope.prixTotalDuPanier = function(idProduit){
    var n = $rootScope.panier.length;
    var total = 0;
    for( var i=0; i <n ; i++){
      total += $rootScope.panier[i].qt * $rootScope.panier[i].price;
    }
    return total;
  }
  $rootScope.nombreArticlesDuPanier = function(idProduit){
    var n = $rootScope.panier.length;
    var total = 0;
    for( var i=0; i <n ; i++){
      total += $rootScope.panier[i].qt ;
    }
    return total;
  }
  // $rootScope.ajouterAuPanier(1, "titre du produit 1", 11.00);
  // $rootScope.ajouterAuPanier(1, "titre du produit 1", 11.00);
  // $rootScope.ajouterAuPanier(2, "titre du produit 3", 11.00);
  // $rootScope.ajouterAuPanier(4, "titre du produit 4", 11.00);
  // $rootScope.ajouterAuPanier(4, "titre du produit 4", 11.00);
  // $rootScope.ajouterAuPanier(4, "titre du produit 4", 11.00);
  // $rootScope.ajouterAuPanier(4, "titre du produit 4", 11.00);
  // $rootScope.ajouterAuPanier(4, "titre du produit 4", 11.00);
  // $rootScope.ajouterAuPanier(5, "titre du produit 5", 11.00);
  // $rootScope.ajouterAuPanier(6, "titre du produit 6", 11.00);
  // $rootScope.ajouterAuPanier(6, "titre du produit 6", 11.00);
  // $rootScope.ajouterAuPanier(7, "titre du produit 7", 11.00);
});
