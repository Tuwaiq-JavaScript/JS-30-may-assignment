function ex4(a){
    
    for(let i =0;i<a.length-1;i*2){
        if(a[i]+a[i+1]===a[i+2]){
        console.log(`numbers ${a[i]} +  ${a[i+1]}  equal ${a[i+2]}`)
        
        }else if(a[i]+a[i+1]!==a[i+2]){
            console.log(`numbers ${a[i]}+  ${a[i+1]}  not equal ${a[i+2]}`)
            
        }
        
    }
}
ex4([1,2,3,4,5,6])