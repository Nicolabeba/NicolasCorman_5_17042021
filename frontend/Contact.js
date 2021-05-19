class Contact {
  constructor() {
    this.firstName = "";
    // if (validPrenomNomVille(firstName)) {
    //   return true;
    // } else {
    //   alert("Ne pas mettre de carractère spéciaux");
    //   return false;
    // }
    this.lastName = "";
    this.email = "";
    this.address = "";
    //this.zip = '';
    this.city = "";
  }

  //Fonction pour valider formulaire
  validFirstName = (value) => {
    if (/^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/.test(value)) {
      this.firstName = value;
      return true;
    }
    return false;
  };

  validLastName = (value) => {
    if (/^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/.test(value)) {
      this.lastName = value;
      return true;
    }
    return false;
  };

  validCity = (value) => {
    if (/^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/.test(value)) {
      this.city = value;
      return true;
    }
    return false;
  };

  validEmail = (value) => {
    if (/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(value)) {
      this.email = value;
      return true;
    }
    return false;
  };

  validAddress = (value) => {
    if (/^(.){4,60}$/.test(value)) {
      this.address = value;
      return true;
    }
    return false;
  };

  // validZip(value) {
  //   if (/^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/.test(value)) {
  //     this.zip = value;
  //     return true;
  //   }
  //   return false;
  // }
}
