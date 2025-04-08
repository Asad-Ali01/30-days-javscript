// function createCounter() {
//     let value = 0;  // scoped inside the function
//     function increment() {
        
//         return ++value;
//     }
//     return {
//         increment: increment
//     }
// }

// const counter1 = createCounter();
// console.log(counter1.increment()); // 1
// console.log(counter1.increment()); // 2



/*
function createCounter() {
    let value = 0;  // scoped inside the function
    function increment() {
        return ++value;
    }
    return increment();  // return the function itself 
}

const counter1 = createCounter();



console.log(counter1; // 1 
console.log(counter1); // 1 
vs 
function createCounter() {
    let value = 0;  // scoped inside the function
    function increment() {
        return ++value;
    }
    return increment;  // return the function itself
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 1 
*/

// (function(a,b) {
//     return a+b
//   }) (2,3); // ← See the () at the end? This immediately invokes it



// const helloworld = function(){
//     return function(...args){
//         return "Hello world"
//     }
// }
// console.log(helloworld())
// helloworld()
  
// function createHelloWorld() {
   
//     return ("Hello World")
    
//   };
  
//   const f = createHelloWorld()
//   console.log(f);
  arr = [1,2,3]
var map = function(arr, fn) {
    newArr = []
    for (let index in arr){
     newArr[index] = fn(arr[index]) 
     
    }
    return newArr
    
    
 };
 function fn(num){
    return num+1
 }
 console.log(map(arr,fn));
 
 