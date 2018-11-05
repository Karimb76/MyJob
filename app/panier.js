app.controller('panierCtrl', function($scope, $rootScope) {
  $rootScope.articles =[
    {idProduit: "1", title: "titre du produit1", qt: "2", price: "34.95" },
    {idProduit: "3", title: "titre du produit3", qt: "6", price: "29.95" },
    {idProduit: "4", title: "titre du produit4", qt: "5", price: "29.95" }
  ]
  $rootScope.ajouterAuPanier = function(idProduit, titreProduit, prixproduit){
      if(  window.referenceExist(idProduit) !== false ){ // si le produit existe
        var newQt = Number(window.referenceExist(idProduit)) + 1; // recupere sa quanite et on l'augmenter car c'est un produit en double ou plus
        window.modifierQTProduitPanier(idProduit, newQt); // on affecte au produit sa nouvelle valeur
      }else{
        // si le produit n'existe pas dans le panier alors on l'ajoute au données du panier
        window.tableauPanier.push([idProduit, titreProduit, 1, prixproduit]) // sa quantite sera forcément de 1
      }
      // rafraichissement de l'affichage du panier modal
      paintPanier();
  }
});

window.ajouterAuPanier = function(idProduit, titreProduit, prixproduit){
    if(  window.referenceExist(idProduit) !== false ){ // si le produit existe
      var newQt = Number(window.referenceExist(idProduit)) + 1; // recupere sa quanite et on l'augmenter car c'est un produit en double ou plus
      window.modifierQTProduitPanier(idProduit, newQt); // on affecte au produit sa nouvelle valeur
    }else{
      // si le produit n'existe pas dans le panier alors on l'ajoute au données du panier
      window.tableauPanier.push([idProduit, titreProduit, 1, prixproduit]) // sa quantite sera forcément de 1
    }
    // rafraichissement de l'affichage du panier modal
    paintPanier();
}
