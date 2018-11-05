// Génération des catégories
for(var cats = 0; cats < categories.length; cats++) {
  $('#categoryList').append(`
    <a id="${categories[cats].id}" class="waves-effect waves-dark btn white dark-blue-text">${categories[cats].name}</a>
    `);
    $('#'+categories[cats].id).on('click', function() {
      var classProduct = document.getElementsByClassName('trObject');
      for(var i = 0; i < classProduct.length; i++) {
        var objectClass = classProduct[i].attributes.class.nodeValue.split(' ');
        if(objectClass[0] !== $(this)[0].id) {
          $('.'+objectClass[0]).slideUp();
        } else {
          $('.'+objectClass[0]).slideDown();
        };
      };
    });
  };

  // Génération des boutons ajouter au panier
  function generateProducts() {
      $('#productList').append(`
        <div class="${products.category} trObject col s12 m6 l4 mb-10">
        <div class="card">
        <div class="card-image">
        <a class="himg"><img class="responsive-img-products" src="${products.image}" /></a>
        </div>
        <p class="center-align card-title truncate dark-blue-text">${products.product}</p>
        <div class="divider"></div>
        <div class="card-content">
        <p><span class="badge blue white-text">${products.categoryName}</span></p><br /><br />
        <p class="truncate">${products.description}</p>
        </div>
        <div class="divider"></div>
        <div class="card-content">
        <div class="row">
        <div class="col s6"
        <p>${parseFloat(products.price).toFixed(2)}€</p>
        </div>
        </div>
        </div>
        </div>
        </div>`);
      }
generateProducts();
