const args = process.argv.slice(2);
const size = parseInt(args[0]);

// Check if the size is NaN or less than 1
if (isNaN(size) || size < 1) {
    console.log("Missing size");
} else {
    // Loop to print the square
    for (let i = 0; i < size; i++) {
        console.log('X'.repeat(size)); 
    }
}
