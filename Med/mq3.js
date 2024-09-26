let hc;

const num1 =4;
const num2 =6;

for (let i =1;   i <= num1&&  i <= num2; i++){


if (num1 %  i ==0 && num2 % i == 0){
       hc =i;


}
}

 let lcm = (num1 * num2 )/ hc;
 console.log(` hc of ${num1} and ${num2} is ${lcm}.`);
