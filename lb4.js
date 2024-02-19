function generatePermutations(n) {

    const permutation = Array.from({ length: n }, (_, i) => i + 1);
  
    function printPermutation() {
      console.log(permutation.join(' '));
    }
  
    function nextPermutation() {
      let j = n - 2;
  
      while (j >= 0 && permutation[j] > permutation[j + 1]) {
        j--;
      }
  
      if (j === -1) {
        return false;
      }
  
      let k = n - 1;
  
      while (permutation[k] < permutation[j]) {
        k--;
      }
  
      [permutation[j], permutation[k]] = [permutation[k], permutation[j]];
  
      let left = j + 1;
      let right = n - 1;
  
      while (left < right) {
        [permutation[left], permutation[right]] = [permutation[right], permutation[left]];
        left++;
        right--;
      }
  
      return true;
    }
  
    printPermutation();
  
    while (nextPermutation()) {
      printPermutation();
    }
  }
  
  generatePermutations(3);
  