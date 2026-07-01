//1.primitive data type(number, string,boolean,undefined,null,biginit,symbol)
// non-primitive(array ,object,function)

//1.primitive data type
// 1.number
let a=20;
let b=4.6;
console.log(a,b);
console.log(typeof(a));
console.log(typeof(b));

// 2.string
let name="Amresh";
let last="kumar";
console.log(name,last);



// 3.boolean
let login=true;
console.log(login);



// 4.undefined
let user;
console.log(user);



// 5.biginit
let num=45856589468568565886n;
console.log(num);



// 6.null
let weather=null;
console.log(weather);



// 7.symbol
const id1=Symbol("id")
console.log(id1);



// non-primitive
// 1.array
let arr=[5,8,0,7,4];
console.log(arr);



// 2.object
let details={
    person:"Amresh",
    category:"gen",
    Age:35
}
console.log(details);




// 3.function

function add(){
    console.log("hello Amresh");
}
add();
