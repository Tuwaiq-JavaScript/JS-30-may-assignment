// Medium

/* 2-write a contacts program that asks for a name and a number and stores 
them as a contact, have a way to show the contacts (optional, add the edit and delete functionallity)*/

function contact(name ,number){
    this.name = name;
    this.number = number;
    console.log("Name: "+name+"\tnNumber: "+number)
}

const person1 = new contact("hamd",7573)
const person2 = new contact("tlal",4213)
const person3 = new contact("nsr",231)