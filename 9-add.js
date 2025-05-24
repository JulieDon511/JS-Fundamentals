const args = process.argv.slice(2); // Get command-line arguments

// Convert the arguments to integers
const fNum = parseInt(args[0]);
const sNum = parseInt(args[1]);

// Define the add function
const add = function(a, b) {
    return a + b; // Return the sum of a and b
};

// Check if both numbers are valid
if (isNaN(fNum) || isNaN(sNum)) {
    console.log('NaN'); // Print NaN if either number is invalid
} else {
    console.log(add(fNum, sNum)); // Call the add function and print the result
}
