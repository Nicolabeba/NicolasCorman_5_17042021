"use strict";
let cart = new Cart();

let showCart = (cart) => {
  if (JSON.parse(localStorage.getItem("cart")) === null) {
    document.querySelector(".table").classList.add("d-none");
    document.querySelector(".panier").innerHTML = `
    <div>Le panier est vide</div>
  `;
  } else {
    // Une autre méthode possible d'Adrien pour avoir aucun literal template :
    //   let myDiv = document.createElement("div");
    //   myDiv.className("decorateMyDiv");
    //   let myBtn = document.createElement("button");
    //   myBtn.addEventListener("click", () => {});
    //   myDiv.appendChild(myBtn);
    //   cartSection.appendChild(myDiv);
    let totalValue = 0;
    let productInPanier = [];
    for (let j = 0; j < cart.items.length; j++) {
      productInPanier += `
          <tr>
          <th scope="row">${j + 1}</th>
          <td>${cart.items[j].name}</td>
          <td>${cart.items[j].quantity}</td>
          <td>${cart.items[j].selectedColor}</td>
          <td class='btn-supp d-flex flex-row justify-content-between'>${
            cart.items[j].price / 100
          } €&nbsp;<button class='btn-supprimer'><i class="fas fa-trash"></i></i></button></td>
        </tr>
        `;

      totalValue += cart.items[j].price / 100;
    }
    //afficher les produits du panier
    document.querySelector(".row-product").innerHTML = productInPanier;

    //AddEvent pour chaque btn supprimer de chaque produit
    let btnSupprimers = document.querySelectorAll(".btn-supprimer");
    for (let k = 0; k < btnSupprimers.length; k++) {
      btnSupprimers[k].addEventListener("click", (k) => {
        cart.removeTeddy(k);
        cart.save();
        window.location.href = "frontend/panier.html";
      });
    }
    console.log(cart.items);

    //Afficher Total price et bouton vider Tout le panier
    document.querySelector(".total-price").innerHTML =
      totalValue +
      ` €&emsp;<button id="btn-vider"><i class="fas fa-trash"></i></button>`;
  }
  //AddEvent bouton vider
  document.querySelector("#btn-vider").addEventListener("click", () => {
    localStorage.removeItem("cart");
    window.location.href = "frontend/panier.html";
  });
};
showCart(cart);

//---------------Envoyer les données du formulaire-----------

// let form1 = {
//   prenom: document.querySelector("#firstName").value,
//   nom: document.querySelector("#lastName").value,
// };
//mais pour avoir la possibilité d'en créer plusieurs alors faire une classe:

class Form {
  constructor() {
    this.prenom = document.querySelector("#firstName").value;
    this.nom = document.querySelector("#lastName").value;
    this.inputEmail = document.querySelector("#inputEmail").value;
    this.inputAddress = document.querySelector("#inputAddress").value;
    this.inputZip = document.querySelector("#inputZip").value;
    this.inputCity = document.querySelector("#inputCity").value;
  }
}

document.querySelector(".btn-primary").addEventListener("click", () => {
  let form = new Form();
  localStorage.setItem("form", JSON.stringify(form));
});

//Récupérer mes données formulaire du LocalStorage
function fillForm(input) {
  document.getElementById(`${input}`).value = JSON.parse(
    localStorage.getItem("form")
  );
}
fillForm(firstName);
fillForm(lastName);
// fillForm(inputEmail);
// fillForm(inputZip);
// fillForm(inputCity);
