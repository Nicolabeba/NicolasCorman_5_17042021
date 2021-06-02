class Cart {
  constructor() {
    //Soit il y a déjà qqch dans le panier, soit il est vide egal à this.items :
    // if (JSON.parse(localStorage.getItem("products"))) {
    //   this.items = JSON.parse(localStorage.getItem("cart"));
    // } else {
    //   this.items = [];
    // }
    this.items = JSON.parse(localStorage.getItem("products")) || [];
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    //si le produit existe déjà dans le localStorage avec même nom et même couleur alors ajouter + 1
    let hasUpdated = false;
    for (let k = 0; k < this.items.length; k++) {
      if (
        item.id === this.items[k].id &&
        item.selectedColor === this.items[k].selectedColor
      ) {
        this.items[k].quantity += 1;
        this.items[k].price *= 2;
        hasUpdated = true;
      }
    }
    if (hasUpdated == false) {
      this.items.push(item);
    }
    this.save();
  }
  removeTeddy(index) {
    // fonction to remove an item from cart
    this.items.splice(index, 1);
  }
  save() {
    // fonction to save the cart back to localStorage
    localStorage.setItem("products", JSON.stringify(this.items));
  }
}
