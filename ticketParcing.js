function getTicketPrice(age) {
    if (age <= 12) {
      return "$10"; // Enfants
    } else if (age >= 13 && age <= 17) {
      return "$15"; // Adolescents
    } else {
      return "$20"; // Adultes
    }
  }
  
  // Exemple d'utilisation
  console.log(getTicketPrice(10)); // $10
  console.log(getTicketPrice(15)); // $15
  console.log(getTicketPrice(25)); // $20
  