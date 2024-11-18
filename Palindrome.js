function isPalindrome(str) {
    // Nettoyer la chaîne en enlevant les espaces, la ponctuation et les majuscules
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    if (str.length <= 1) {
      return true; // Base case: chaîne vide ou un seul caractère est un palindrome
    } else {
      if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1)); // Cas récursif
      } else {
        return false; // Si les caractères ne correspondent pas, ce n'est pas un palindrome
      }
    }
  }
  
  // Exemple d'utilisation
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  console.log(isPalindrome("Hello")); // false
  