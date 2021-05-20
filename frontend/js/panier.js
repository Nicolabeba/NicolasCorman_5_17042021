"use strict";
let cart = new Cart();
let totalValue = 0;

let showCart = (cart) => {
  if (JSON.parse(localStorage.getItem("products")) === null) {
    document.querySelector(".table").classList.add("d-none");
    document.querySelector(".buy-form").classList.add("d-none");
    document.querySelector(".panier").innerHTML = `
    <div>Le panier est vide</div>
  `;
  } else {
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
    //Afficher Total price
    document.querySelector(".total-price").innerHTML = totalValue + " " + "€";
    //afficher les produits du panier
    document.querySelector(".row-product").innerHTML = productInPanier;

    //AddEvent pour chaque btn supprimer de chaque produit
    let btnSupprimers = document.querySelectorAll(".btn-supprimer");
    for (let k = 0; k < btnSupprimers.length; k++) {
      btnSupprimers[k].addEventListener("click", (k) => {
        cart.removeTeddy(k);
        if (cart.items == 0) {
          localStorage.removeItem("products");
        } else {
          cart.save();
        }
        window.location.href = "frontend/panier.html";
      });
    }
  }
};
showCart(cart);

//---------------Le formulaire-----------

//STOCKER MES DONNEES DANS UN OBJET
let contactFormValidation = new Contact();
//Valider mes champs formulaire/contact

let validField = (key, fct) => {
  const field = document.querySelector(`#${key}`);
  field.addEventListener("change", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (fct(e.currentTarget.value)) {
      field.nextElementSibling.innerHTML = "";
      localStorage.setItem(key, e.currentTarget.value);
    } else {
      let fieldTitle = field.previousElementSibling.textContent;
      field.nextElementSibling.innerHTML = fieldTitle + " invalide";
    }
  });
};
validField("firstName", contactFormValidation.validFirstName);
validField("lastName", contactFormValidation.validLastName);
validField("address", contactFormValidation.validAddress);
validField("email", contactFormValidation.validEmail);
validField("city", contactFormValidation.validCity);

//(Première méthode non factorisée :)
// let zip = document.querySelector("#zip");
// zip.addEventListener("change", function (e) {
//   e.preventDefault();
//   e.stopPropagation();
//   if (contactFormValidation.validZip(zip.value)) {
//     zip.nextElementSibling.innerHTML = "";
//   } else {
//     zip.nextElementSibling.innerHTML = "Code postal invalide";
//   }
// });

//Envoyer mes données au localStorage et à mon API avec postTeddy() !
document.querySelector(".btn-primary").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (
    contactFormValidation.firstName &&
    contactFormValidation.lastName &&
    contactFormValidation.city &&
    //contactFormValidation.zip &&
    contactFormValidation.email &&
    contactFormValidation.address
  ) {
    let products = [];
    let cartCommand = new Cart();
    for (let item of cartCommand.items) {
      products.push(item.id);
    }
    postTeddy(contactFormValidation, products);
  } else {
    window.alert("Un des champs du formulaire n'a pas été bien rempli !");
  }
});

//Récupérer mes données formulaire du LocalStorage
function fillForm(input) {
  let contactStored = localStorage.getItem(input);
  document.getElementById(input).value = contactStored;
  contactFormValidation[input] = contactStored;
}
fillForm("firstName");
fillForm("lastName");
fillForm("email");
fillForm("address");
fillForm("city");

console.log(contactFormValidation);
