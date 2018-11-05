app.controller('panierCtrl', function($scope, $rootScope, $filter) {
  $rootScope.panier =[
    // {idProduit: 1, title: "titre du produit1", qt: "2", price: "34.95" },
    // {idProduit: 3, title: "titre du produit3", qt: "6", price: "29.95" },
    // {idProduit: 4, title: "titre du produit4", qt: "5", price: "29.95" }
  ]
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
      return false; // retourne faux si le produit demander n'existe pas
  }

  $rootScope.ajouterAuPanier = function(idProduit, titreProduit, prixproduit){
      if(  $rootScope.referenceExist(idProduit) !== false ){ // si le produit existe
        //console.log($rootScope.referenceExist(idProduit));
        var newQt = $rootScope.referenceExist(idProduit) + 1; // recupere sa quanite et on l'augmenter car c'est un produit en double ou plus
        $rootScope.modifierQTProduitPanier(idProduit, newQt); // on affecte au produit sa nouvelle valeur
      }else{
        // si le produit n'existe pas dans le panier alors on l'ajoute au données du panier
        $rootScope.panier.push({idProduit: idProduit, title: titreProduit, qt: "1", price: prixproduit }) // sa quantite sera forcément de 1
      }
  }

  $rootScope.ajouterAuPanier(1, "titre du produit1", "10.00");
  console.log($rootScope.referenceExist(3).qt);
  $rootScope.ajouterAuPanier(3, "titre du produit3", "10.00");
  console.log($rootScope.referenceExist(3).qt);
  $rootScope.ajouterAuPanier(3, "titre du produit3", "10.00");
  console.log($rootScope.referenceExist(3).qt);
  $rootScope.ajouterAuPanier(4, "titre du produit4", "10.00");
  console.log("fin:")
  console.log($rootScope.referenceExist(3).qt);

  // $rootScope.modifierQTProduitPanier(3, 4);
  // console.log($rootScope.referenceExist(3).qt);
});
