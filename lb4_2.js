function combinations(n, r) {
    if (r > n) {
      return [];
    }
  
    const combination = Array(r).fill(null);
    for (let i = 0; i < r; i++) {
      combination[i] = i + 1; 
    }
  
    function nextCombination(combination) {
      let i = r - 1;
      while (i >= 0 && combination[i] === n - r + i + 1) { 
        i--;
      }
  
      if (i === -1) {
        return null;
      }
  
      combination[i]++;
      for (let j = i + 1; j < r; j++) {
        combination[j] = combination[i] + j - i;
      }
  
      return combination;
    }
  
    const allCombinations = [];
    let currentCombination = combination;
    while (currentCombination !== null) {
      allCombinations.push(currentCombination.slice());
      currentCombination = nextCombination(currentCombination);
    }
  
    return allCombinations;
  }
  
  const n = 5;
  const r = 4;
  const allCombinations = combinations(n, r);
  
  console.log(`Всі r-сполучення без повторень з множини {1, 2, ..., ${n}} в лексикографічному порядку:`);
  for (const combination of allCombinations) {
    console.log(combination.join(" "));
  }
  