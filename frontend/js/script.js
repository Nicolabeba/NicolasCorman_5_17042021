"use strict";

const result = document.getElementById("result");

//API REQUEST

/*const fetchTeddies = async () => {
  teddies = await fetch(
    "https://ab-p5-api.herokuapp.com/api/teddies"
  ).then((res) => res.json());
};*/

const fetchTeddies = async () => {
  return await fetch("http://127.0.0.1:3000/api/teddies").then((res) =>
    res.json()
  );
};

const showTeddies = async () => {
  let teddies = await fetchTeddies();
  result.innerHTML = teddies
    .map(
      (teddy) =>
        `<a class="product-click" href='frontend/produit.html?name=${
          teddy._id
        }'>
                <div class="card" style="width: 18rem">
                        <div class="card-img-top" style="background-image: url(${
                          teddy.imageUrl
                        })"></div>
                        <div class="card-body">
                        
                        <div class='d-flex align-items-center justify-content-between'>
                            <h5 class="card-title">${teddy.name}</h5>
                            <p class ='price'>${teddy.price / 100} €
                            </p>                       
                        </div>
                        <p class="card-text">${teddy.description}</p>

                        <a href='frontend/produit.html?name=${
                          teddy._id
                        }' class="btn btn-primary">
                            Acheter
                        </a>
                        </div>
                </div>
            </a>
                  
                `
    )
    .join("");
};
showTeddies();
