function power(base, exponent) {
    if (exponent === 0) {
      return 1; // Base case: tout nombre élevé à la puissance 0 est égal à 1
    } else if (exponent < 0) {
      return 1 / power(base, -exponent); // Pour les puissances négatives
    } else {
      return base * power(base, exponent - 1); // Cas récursif
    }
  }
  
  // Exemple d'utilisation
  console.log(power(2, 3)); // 8 (2^3 = 2 * 2 * 2)
  console.log(power(5, 0)); // 1 (5^0 = 1)

  