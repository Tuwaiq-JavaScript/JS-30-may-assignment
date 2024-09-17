let numbers = [5,6,11,7,2,10,5,2,7,2,3,7];
  for(let i=0;i<numbers.length;i){
   if(numbers[i] + numbers[i+1] == numbers[i+2]){
     console.log('numbers '+ numbers[i] + ' + ' + numbers[i+1] +' do equal ' + numbers[i+2]);
   }
   else{
   console.log('numbers '+ numbers[i] + ' + ' + numbers[i+1] +' do not equal ' + numbers[i+2]);
   }
   i=i+3; 
  }
  