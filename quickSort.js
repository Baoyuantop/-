//Quick sort.
//Time complexity in most cases it is O(nlogn), the extreme case is O(n^2).
//The key is to choose a reasonable pivot.

function kuaipai(arr) {
  if(arr.length <= 1){
    return arr;
  }
  //Selete the baseline and separate from the original array.
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex,1)[0];
  //Use two array, one left and one right, two subsets.
  var left =[];
  var right = [];
  //Traversing the array, less than the baseline to the left, greater than the baseline to the right.
  for(var i=0; i<arr.length; i++){
    if(arr[i]<pivot){
      left.push(arr[i]);
    }else if(arr[i]>pivot){
      right.push(arr[i]);
    }
  }
  //Use recursive repeated calls.
  return kuaipai(left).concat([pivot],kuaipai(right));
}

var arr = [2,1,4,3,6,5,8,7,10,9];
console.log(kuaipai(arr));
