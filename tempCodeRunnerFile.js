const map = function(arr,fn){
    return arr.map(fn)
}
console.log(map([1,2,3], (num)=> num+1));