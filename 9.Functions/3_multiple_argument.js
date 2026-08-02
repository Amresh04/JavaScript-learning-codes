// function addNumber(a,b,c,d){
//     sum=a+b+c+d;
//     console.log(sum);
// }


// for this type of Question we use rest operator---> they convert in array
function addNumber(...num){

    let sum=0;
    for (let n of num){
        sum+=n;
    }


 console.log(sum);
}
addNumber(2,3);
addNumber(2,5,7);
addNumber(6,9,20,12);