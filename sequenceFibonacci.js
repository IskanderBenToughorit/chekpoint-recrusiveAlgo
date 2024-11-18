function fibonacci(n) {
    if (n <= 1) {
      return n; // Base case: fib(0) = 0, fib(1) = 1
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2); // Cas récursif
    }
  }
  
  // Exemple d'utilisation
  console.log(fibonacci(5)); // 5 (séquence : 0, 1, 1, 2, 3, 5)
  console.log(fibonacci(10)); // 55
  