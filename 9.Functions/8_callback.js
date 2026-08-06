function greet(){
    console.log("Hello ji,Kaise ho");
}
function meet(callback){
    console.log("I am going to meet Someone");
    callback();
}
meet(greet);