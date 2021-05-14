class Teddy {
  constructor(
    id,
    name,
    price,
    imageUrl,
    description,
    colors,
    selectedColor,
    quantity = 1
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this.colors = colors;
    this.selectedColor = selectedColor;
    this.quantity = quantity;
  }
}
