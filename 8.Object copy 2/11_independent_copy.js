const user={
    name:"Amresh",
    age:20,
    branch:"CSE(AI & ML)",
    address:{
        "village":"Mahuara",
        "city":"Muzaffarpur"
    }
    
}
user2={...user};
user2.name="Ansh";
console.log(user2);