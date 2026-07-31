const user={
    name:"Amresh",
    age:20,
    branch:"CSE(AI & ML)",
    address:{
        "village":"Mahuara",
        "city":"Muzaffarpur"
    }
    
}
const user2=structuredClone(user);
user2.address.city="Sitamarhi";
console.log(user2);