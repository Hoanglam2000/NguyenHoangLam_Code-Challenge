// Provide 3 unique implementations of the following function in JavaScript.

// **Input**: `n` - any integer

// *Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

// **Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

//Implementation 1

var sum_to_n_a = function(n) {
    function sum_to_n(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
          sum += i;
        }
        return sum;
      }
      
      console.log(sum_to_n(5)); // Output: 15
};
  

//Implementation 2

var sum_to_n_b = function(n) {
    function sum_to_n(n) {
        return n * (n + 1) / 2;
      }
      
      console.log(sum_to_n(5)); // Output: 15
    
};

//Implementation 3

var sum_to_n_c = function(n) {
    function sum_to_n(n) {
        if (n === 1) {
          return 1;
        }
        return n + sum_to_n(n - 1);
      }
      
      console.log(sum_to_n(5)); // Output: 15
};
  
  