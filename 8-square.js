

const args =process.argv.slice(2);
let side = parseInt(args[0]);
const a = "X"



if (isNaN(side) || side<=0 ){
    console.log('Missing size');
}else{
   for( let i = 0; i<side; i++){


    console.log(a.repeat(side));
   }

    
}