const args = process.argv.slice(2); 
const size = parseInt(args[0]); 
const character = 'X'; 

if (isNaN(size) || size <= 0) {
    console.log('Missing size'); 
} else {
    for (let i = 0; i < size; i++) { 
        console.log(character.repeat(size)); s
    }
}
