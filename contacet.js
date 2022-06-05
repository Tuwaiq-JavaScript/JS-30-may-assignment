var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contuser(){
    rl.question(`Enter contact Name `, uName=>{
        rl.question(`Enter another number: `, uPhh=> {
            
  //  NName=uName;
  //  PPhonenum=uPhh;
  rl.close();
    addcont(uName,uPhh);
    
getcontacet();

          
        });
    });
}
var contact=[{Name:"Ali",PhoneNum:"1"},{Name:"moh",PhoneNum:"2"}];
function addcont(NName,PPhonenum){
     contact.push({Name:NName,PhoneNum:PPhonenum});
}
function getcontacet(){
   
   
    for(var item of contact){
        //console.log(i+"= > "+item.Name +" | "+item.PhoneNum);
        console.log(item);

      //  i++;
    }
    
    }
    


    contuser();
