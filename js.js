function sayHello(){
    console.log("Hi")
}

function doSomething(callBack){
    console.log("I am doing something ...");
    callBack();
}
doSomething(sayHello);