

const args = process.argv.slice(2);
const count = parseInt(args[0]);
const a = 'C is fun';

if (isNaN(count) || count <= 0) { // Check if the conversion is valid and positive
    console.log('Missing number of occurrences');
} else {
    for (let i = 0; i < count; i++) { // Use different variable 'i' for loop counter
        console.log(a);
    }
}








