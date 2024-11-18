function clothingAdvice(temperature, isRaining) {
    if (isRaining) {
      if (temperature < 15) {
        return "Il pleut et il fait froid. Portez un manteau imperméable et des bottes.";
      } else {
        return "Il pleut, mais il fait chaud. Portez un imperméable léger.";
      }
    } else {
      if (temperature < 15) {
        return "Il ne pleut pas, mais il fait froid. Portez un manteau.";
      } else {
        return "Il fait beau. Portez des vêtements légers.";
      }
    }
  }
  
  // Exemple d'utilisation
  console.log(clothingAdvice(10, true)); // Il pleut et il fait froid. Portez un manteau imperméable et des bottes.
  console.log(clothingAdvice(20, false)); // Il fait beau. Portez des vêtements légers.
  