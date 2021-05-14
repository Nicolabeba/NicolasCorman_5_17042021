"use strict";

const getTeddy = (id) => {
  fetch(`http://127.0.0.1:3000/api/teddies/${id}`)
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
      handleGetTeddy(currentTeddy);
    });
};
