var filter = function(arr, fn) {
    let filterArray = []
    for (let index in arr){
      // filterArray[index] = fn(arr[index],Number(index))  //it gives true and false 
       if (fn(arr[index],Number(index))){  //it gives values why explian below
          // filterArray.push(arr[index])
       }
      }
    
    
    return filterArray
  };
  let arr = [0,10,20,30] 
  function fn(n) { 
    return n>10
  }
  let f = filter(arr,fn)
  console.log(f)
  // if ([1,2,3]) {}

/* *********************************************************************
🧩 First Approach: Assigning true/false to filterArray
filterArray[index] = fn(arr[index], Number(index));
How it works:
fn(arr[index], Number(index)) is returning true or false.

In your fn function, you're checking if n > 10, so it will return true if the number is greater than 10, and false otherwise.

In this line, you're assigning the boolean value (true or false) to filterArray[index].

So, filterArray will hold true or false for each index depending on whether the condition is met.

Example:
For arr = [0, 10, 20, 30] and fn(n) { return n > 10; }:

arr[0] = 0: fn(0) → returns false → filterArray[0] = false

arr[1] = 10: fn(10) → returns false → filterArray[1] = false

arr[2] = 20: fn(20) → returns true → filterArray[2] = true

arr[3] = 30: fn(30) → returns true → filterArray[3] = true

At the end of the loop, filterArray would look like this:
[false, false, true, true]
🧩 Second Approach: Using if condition with push
if (fn(arr[index], Number(index))) {
    filterArray.push(arr[index]);
}
How it works:
This block checks if the result of fn(arr[index], Number(index)) is true.

If the condition is true, it pushes the corresponding array element (arr[index]) into filterArray.

So, instead of adding true/false, you're adding the actual values from arr that satisfy the condition.

Example:
For arr = [0, 10, 20, 30] and fn(n) { return n > 10; }:

arr[0] = 0: fn(0) → returns false → skip (no change to filterArray).

arr[1] = 10: fn(10) → returns false → skip (no change to filterArray).

arr[2] = 20: fn(20) → returns true → push 20 to filterArray.

arr[3] = 30: fn(30) → returns true → push 30 to filterArray.

At the end of the loop, filterArray would look like this:
[20, 30]
🧠 Why the Difference?
First Approach:

You assign the result of fn (either true or false) to filterArray[index].

This means filterArray will hold boolean values (either true or false), not the actual values from the original array.

Second Approach:

You check if the result of fn is true.

If true, you push the actual value (arr[index]) into filterArray.

This results in filterArray holding only the values that passed the filter condition.

Final Comparison:
First Approach (filterArray[index] = fn(arr[index], Number(index));):

filterArray will contain true/false values based on the condition.

Second Approach (if (fn(arr[index], Number(index))) { filterArray.push(arr[index]); }):

filterArray will contain only the values that pass the condition.

🧠 Conclusion:
If you want to get the actual filtered values, you need to use the push method inside the if block.

If you just want to track whether each value passes the condition (i.e., store true or false), you can assign the result directly to the array.

                *************************************************************************************             /*


//   var filter = function(arr, fn) {
//     let filterArray = []  // Create an empty array to store the filtered values
//     for (let index in arr) {  // Loop through the array using its indices
//         // Check if the current element passes the test defined in the callback function 'fn'
//         if (fn(arr[index], Number(index))) {  //now here  fn(arr[index]) is a funtion which we define below it runs and arr[index] is array which pass on it 
//             filterArray.push(arr[index]);  // If it passes, add it to filterArray  
//         }
//     }
//     return filterArray;  // Return the filtered array
// };
// let arr = [0,10,20,30]
// function fn(n,i){  //now this is the function which we check in if condition if(fn(arr[index],Number(index))) and here if n is the array which is we use in filter(arr,fn) below and its value we defined as [0,10,20,30] so now each value is going 1 by one into fn(arr[index]) or fn(n){return n>10} and cheking this condition and return values that are true.
//   return n>10;
// }
// const f = filter(arr,fn)
// console.log(f);
