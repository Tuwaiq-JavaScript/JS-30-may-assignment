var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function processSum(number) {
    // Insert code to do whatever with sum here.
    console.log('The sum is', number);
}
rl.question('enter the number',function(x){

    let res=parseInt(x)%2;
    if(res==0){
        console.log('its even')
    }else{
        console.log('its odd')
    }
rl.close();
});


