

//Q4M

let arr = [5,6,11,7,2,10,5,2,7];

for(let i=0;i<arr.length;i=i+3){
if(arr[i]+arr[i+1]===arr[i+2]){
    console.log(arr[i]+" and  "+ arr[i+1]+"  is equal to "+arr[i+2]);
   
}else{
    console.log(arr[i]+" and "+arr[i+1]+"  is not equal to "+arr[i+2]);

}
}