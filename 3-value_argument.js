const totalArgs = process.argv.slice(2);

if (totalArgs[0]) {
    console.log(totalArgs[0]);  
} else {
    console.log('No argument'); 
}

