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

var http = require('http');
var server = http.createServer(function(req, res){

    var log = {
        function info(info){
            console.log('info:' + info);
        },
        function warning(warning){
            console.log('warning: ' + warning)
        }
    }
});

server.listen(3000);
module.exports = log

for( i=0; i<6; i++){
    console.log("Hello world");
}