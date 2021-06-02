"use strict";

const getTeddy = (id) => {
  return fetch(`http://127.0.0.1:3000/api/teddies/${id}`)
    .then((res) => res.json())
    .then((jsonData) => {
      let currentTeddy = new Teddy(
        jsonData._id,
        jsonData.name,
        jsonData.price,
        jsonData.imageUrl,
        jsonData.description,
        jsonData.colors
      );
      return currentTeddy;
    })
    .catch((error) => {
      console.log(error);
    });
};

const postTeddy = (contact, products) => {
  let dataSubmit = JSON.stringify({ products, contact });
  fetch("http://127.0.0.1:3000/api/teddies/order", {
    method: "POST",
    body: dataSubmit,
    headers: {
      "Content-Type": "application/json",
    },
    //Résulat du serveur dans la commande
    //récupération de l'Id de la commande
  }).then(async (response) => {
    try {
      const respContent = await response.json();
      localStorage.setItem("orderId", respContent.orderId);
      window.location.href = "frontend/confirmation.html";
    } catch {
      alert(` Erreur : ${response.status}`);
    }
  });
};
