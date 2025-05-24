const totalArgs = process.argv;

if (totalArgs[0]) {
    console.log(totalArgs[0],'Argument found');   // Print the argument when it exists
} else {
    console.log('No argument');  // Print "No argument" when no argument is given
}

// 
console.log(process.argv);
