
var reduce = function(nums, fn, init) {
   let val = init;

//    for (let i=0; i< nums.length; i++){
//     val = fn(val,nums[i])
//    }

//    for (let index in nums){
//     val = fn(init, nums[0])
//      val = fn(val, nums[1])
//       val = fn(val, nums[2])
//       val = fn(val, nums[3])
//     // val += fn(init,nums[0])
//     // console.log(val);   
//    }
    
   return val
//  let val = nums.reduce(fn)


};
// let nums = [1,2,3,4]
let nums = []
let init = 30;
fn = function sum(accum, curr) { return 0; }
console.log(reduce(nums,fn,init));
