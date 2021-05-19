"use strict";

let orderId = localStorage.getItem("orderId");

document.querySelector(
  "#confirmation"
).innerHTML = `Votre commande numéro <span class='font-weight-bold'>${orderId}</span> pour un montant de <span class='font-weight-bold'>${totalValue} €</span> a bien été prise en compte. <br /><span class='font-weight-bold'>Au plaisir de vous revoir !</span>`;

localStorage.removeItem("products");
localStorage.removeItem("orderId");
