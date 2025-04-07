var filter = function(arr, fn) {
    let filterArray = []
    for (let index in arr){
      // filterArray[index] = fn(arr[index],Number(index))
       if (fn(arr[index],Number(index))){  
          filterArray.push(arr[index])
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