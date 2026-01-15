function sayHello(){
    console.log("Hi")
}

function doSomething(callBack){
    console.log("I am doing something ...");
    callBack();
}
doSomething(sayHello);

const numbers = [1, 2, 3 ,4 ,5];
const doubled = numbers.map(function(num) {
    return num * 2;
});
 console.log(doubled);

const evens = numbers.map(function(num){
    return num%2 ==0;
});
console.log(evens) ;

const even = numbers.filter(function(num){
    return num%2 ==0;
});

console.log(even);

const odds = numbers.filter(function(number){
    return number %2 != 0;
});
console.log(odds);