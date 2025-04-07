// const map = function(arr,fn){
//     return arr.map(fn)  //here arr values like [1,2,3] is going in to fn one by one 1+1,2+1,3+1
// }
// arr = [1,2,3]
// const a = (n) => n+1
// console.log(map(arr,a));

/*
const map = function(arr,fn){
    let result = []
        for(let i in arr){
           result.push(fn(arr[i], Number(i)));   //here arr[i] means 1,2,3 is going into fn one by one and what fn do we define it below function plusone(n) { return n + 1; } here n = 1,2,3 one by one 
           console.log(typeof Number(i))
        }
  return result
}
  */
/*
const map = function(arr,fn){
  let result = []
      for(let i in arr){
        result[i] = fn(arr[i],i)
      }
return result
}

*/
/*
var map = function(arr, fn) {
  for (let i = 0; i < arr.length; ++i) {
      arr[i] = fn(arr[i], (i));
      
      
  }
  return arr;
};
*/
/*
var map = function(arr, fn) {
  const transformedArr = [];
  arr.forEach((element, index) => {
    transformedArr[index] = fn(element, index);
  });
  return transformedArr;
};
*/
arr = [1,2,3]
 function plusone(n) { return n + 1; }
const newArray = map(arr, plusone);
console.log(newArray);



/*
var map = function(arr, fn) {
    let newArray = []
 for(let index in arr){
    newArray[index] = fn(arr[index],Number(index))
 }
 return newArray
};
arr = [1,2,3]
function fn(i) { return i+1}
let f = map(arr,fn)
console.log(f)
function fn2(n,i) { return n+i}
 f = map(arr,fn2)
console.log(f)
function fn3(n,i) {return 42}
 f = map(arr,fn3)
console.log(f)
*/


/*
var map = function(arr, fn) {
   let newArr =  arr.map(fn)
    return newArr
};
arr = [1,2,3]
function fn(i) { return i+1}
let f = map(arr,fn)
console.log(f)
*/
// ************NOtes**************
/*
arr.map(fn) creates a new array by applying the function fn to each element of arr.

fn(i) is the callback function — in this case, it adds 1 to each element.

map() automatically passes the value, index, and array to the function.
*/