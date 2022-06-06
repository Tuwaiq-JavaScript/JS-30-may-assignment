//-------------------------------------Home Work 1 ---------------
//-------------------------------------Easy Exercise: 
//Exercise 1 
function greet(name){
    console.log('Hello ' + name);
}
greet('Wasayf'); 

//-------------------------------------------------------------
//Exercise 2 
function sumNumber(num1,num2){
    return num1+num2; 
}
console.log('The sum of 2 numbers = '+sumNumber(2,2)); 

//------------------------------------------------------------------
//Exercise 3 
function evenORoddNumber(num){
    if(num%2==0)
    {
        console.log('The number is even ');
    }
    else
    console.log('The number is Odd'); 
 }
(evenORoddNumber(4));

//--------------------------------------------------------------------
 //Exercise 4 
function fibonacciSequence(number) {
      let Result=0;
      let num1 =0; 
      let num2 =1; 
      for(let i=0; i<=number; i++){
        console.log(num1); 
        Result=num1+num2;
        num1=num2;
        num2=Result;
    }
}
fibonacciSequence(5);

//------------------------------------------------------------- 
//Exercise 5 
function factorialNumber(number){
    let fact=1;
    console.log('The factorial ' +number+'! is: '); 
    for(let i=1;i<=number;i++) {
     fact= fact*i; 
    }
     return fact; 
}
console.log(factorialNumber(5)); 

//----------------------------------------------Medium Exersise 
// Exersise 1  
function sumOfnumbers(array){
    let sum=0; 
    
   for(let i of array) 
       sum=sum+i;
    
       return sum;
};
console.log('The sum of array = '+ sumOfnumbers([1,2,3,4,5]));
