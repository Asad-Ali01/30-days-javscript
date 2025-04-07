/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
debugger
var createCounter = function(init) {
   let  current_count = init;
    return {
        increment:function(){
            
            return ++current_count;
        },
        decrement:function(){
            // current_count = init;
            // return current_count > 0 ? --current_count : 0;
            return --current_count
           
        },
        reset:function(){
           return current_count = init
        }
    }
};

/*
var createCounter = function(init) {
    let presentCount = init
    return {
        increment:()=> ++presentCount,
        decrement:()=> --presentCount,
        reset:()=> presentCount = init,
    }
};

*/

/*
class Counter {
  constructor(init) {
    this.init = init;
    this.presentCount = init;
  }

  increment() {
    // this.presentCount += 1;
    return ++this.presentCount;
  }

  decrement() {
    // this.presentCount -= 1;
    return --this.presentCount;
  }

  reset() {
    this.presentCount = this.init;
    return this.presentCount;
  }
}

var createCounter = function(init) {
  return new Counter(init);
};

console.log(createCounter(10).increment())
console.log(createCounter(10).reset())
console.log(createCounter(10).decrement())

*/


const f = createCounter(10);
console.log(f.increment());
// console.log(f.increment());
// console.log(f.increment());
// console.log(f.decrement());
// console.log(f.decrement());
// console.log(f.decrement());
console.log(f.reset());
// console.log(f.reset());
// console.log(f.increment());
console.log(f.decrement());



/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */