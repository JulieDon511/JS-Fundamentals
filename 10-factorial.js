const args = process.argv.slice(2);
const factor = parseInt(args[0]);

// Recursive function to compute factorial
const factorial = (n) => {
    if (n < 0) return 0; 
    if (n === 0 || n === 1) return 1; 
    return n * factorial(n - 1); 
};

// Check if the input is NaN
if (isNaN(factor)) {
    console.log(1); 
} else {
    const result = factorial(factor);
    console.log(result); 
}
