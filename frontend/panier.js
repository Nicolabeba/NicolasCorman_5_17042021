"use strict";
let cart = new Cart();

let showCart = (cart) => {
  if (JSON.parse(localStorage.getItem("products")) === null) {
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

    //Afficher Total price et bouton vider Tout le panier
    document.querySelector(".total-price").innerHTML =
      totalValue +
      ` €&emsp;<button id="btn-vider"><i class="fas fa-trash"></i></button>`;
  }
};
showCart(cart);

//AddEvent bouton vider
document.querySelector("#btn-vider").addEventListener("click", () => {
  localStorage.removeItem("products");
  window.location.href = "frontend/panier.html";
});

//---------------Le formulaire-----------

//STOCKER MES DONNEES DANS UN OBJET
let contactFormValidation = new Contact();

//Valider mes champs formulaire/contact

let firstName = document.querySelector("#firstName");
firstName.addEventListener("change", function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (contactFormValidation.validFirstLastNameCity(firstName)) {
    firstName.nextElementSibling.innerHTML = "";
  } else {
    firstName.nextElementSibling.innerHTML = "Prénom invalide";
  }
});

let lastName = document.querySelector("#lastName");
lastName.addEventListener("change", function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (contactFormValidation.validFirstLastNameCity(lastName)) {
    lastName.nextElementSibling.innerHTML = "";
  } else {
    lastName.nextElementSibling.innerHTML = "Nom invalide";
  }
});

let email = document.querySelector("#email");
email.addEventListener("change", function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (contactFormValidation.validEmail(email)) {
    email.nextElementSibling.innerHTML = "";
  } else {
    email.nextElementSibling.innerHTML = "Email invalide";
  }
});

let address = document.querySelector("#address");
address.addEventListener("change", function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (contactFormValidation.validAddress(address)) {
    address.nextElementSibling.innerHTML = "";
  } else {
    address.nextElementSibling.innerHTML = "Adresse invalide";
  }
});

let zip = document.querySelector("#zip");
zip.addEventListener("change", function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (contactFormValidation.validZip(zip)) {
    zip.nextElementSibling.innerHTML = "";
  } else {
    zip.nextElementSibling.innerHTML = "Code postal invalide";
  }
});

let city = document.querySelector("#city");
city.addEventListener("change", function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (contactFormValidation.validFirstLastNameCity(city)) {
    city.nextElementSibling.innerHTML = "";
  } else {
    city.nextElementSibling.innerHTML = "Ville invalide";
  }
});

//Envoyer mes données au localStorage
document.querySelector(".btn-primary").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (
    contactFormValidation.validFirstLastNameCity(firstName) &&
    contactFormValidation.validFirstLastNameCity(lastName) &&
    contactFormValidation.validFirstLastNameCity(city) &&
    contactFormValidation.validZip(zip) &&
    contactFormValidation.validEmail(email) &&
    contactFormValidation.validAddress(address)
  ) {
    let contact = new Contact();
    localStorage.setItem("contact", JSON.stringify(contact));
  } else {
    window.alert("Un des champs du formulaire n'a pas été bien rempli !");
  }
});

//Récupérer mes données formulaire du LocalStorage
function fillForm(input) {
  let contactStored = JSON.parse(localStorage.getItem("contact"));
  document.querySelector(`#${input}`).value = contactStored[input];
}
fillForm("firstName");
fillForm("lastName");
fillForm("email");
fillForm("address");
fillForm("zip");
fillForm("city");
