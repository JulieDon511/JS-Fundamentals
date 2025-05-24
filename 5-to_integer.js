const args = process.argv.slice(2); // Get command-line arguments
const num = parseInt(args[0]); // Convert the first argument to an integer

if (!isNaN(num)) { // Check if the conversion was successful
    console.log(`My number: ${num}`); // Print the integer
} else {
    console.log('Not a number'); // Print if it cannot be converted
}
