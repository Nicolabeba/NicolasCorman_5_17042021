class Contact {
  constructor() {
    this.firstName = document.querySelector("#firstName").value;
    // if (validPrenomNomVille(firstName)) {
    //   return true;
    // } else {
    //   alert("Ne pas mettre de carractère spéciaux");
    //   return false;
    // }
    this.lastName = document.querySelector("#lastName").value;
    this.email = document.querySelector("#email").value;
    this.address = document.querySelector("#address").value;
    //this.zip = document.querySelector("#zip").value;
    this.city = document.querySelector("#city").value;
  }

  //Fonction pour valider formulaire
  validFirstLastNameCity(input) {
    return /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/.test(input.value);
  }
  validEmail(input) {
    return /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(
      input.value
    );
  }
  validAddress(input) {
    return /^(.){4,60}$/.test(input.value);
  }

  validZip(input) {
    return /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/.test(input.value);
  }
}
