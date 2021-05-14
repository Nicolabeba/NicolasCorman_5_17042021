"use strict";
const queryStringId = window.location.search;

const id = new URLSearchParams(queryStringId).get("name");

getTeddy(id);

//Fonction fenêtre pop-up
const popUpConfirmation = (teddy) => {
  if (
    window.confirm(
      `${teddy.name} avec sa couleur ${teddy.selectedColor} a bien été ajouté au panier. Appuyez sur OK pour consulter le panier, ou sur ANNULER pour revenir à l'accueil.`
    )
  ) {
    window.location.href = "frontend/panier.html";
  } else {
    window.location.href = "frontend/index.html";
  }
};

//Fonction HandleGetTeddy qui récupère mon teddy:
let handleGetTeddy = (teddy) => {
  document.getElementById("image-url").setAttribute("src", `${teddy.imageUrl}`);
  document.querySelector(".card-title").innerHTML = `${teddy.name}`;
  document.querySelector(".price").innerHTML = `${teddy.price / 100} €`;
  document.querySelector(".card-text").innerHTML = `${teddy.description}`;

  //boucle pour afficher toutes les couleurs du produit:
  let colorIteration;
  for (let i = 0; i < teddy.colors.length; i++) {
    colorIteration += `<option  value="${teddy.colors[i]}">${teddy.colors[i]}</option>`;
  }

  document.getElementById("color-option").innerHTML =
    `<option value="">Choisir la couleur</option>` + colorIteration;

  // Ecouter le Bouton et récupérer les données selectionnées :

  document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();

    let selectedTeddy = teddy;
    selectedTeddy.selectedColor = document.querySelector("#color-option").value;
    console.log(selectedTeddy);
    // -----------------Local Storage---------------
    let cart = new Cart();
    cart.addItem(selectedTeddy);
    //cart.getNewQuantity(selectedTeddy);
    popUpConfirmation(teddy);
  });
};
