//Merge sort
//Time complexity O(nlogn)
//Space complexity O(n)
//Not in situ sorting algorithm.
//Stable sorting algorithm.


function merge(left,right) {
  var tem = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      tem.push(left.shift());
    }else{
      tem.push(right.shift());
    }
  }
  return tem.concat(left,right);
}

function mergesort(arr) {
  if(arr.length === 1){
    return arr;
  }
  var mid = ~~(arr.length/2);
  var left = arr.slice(0,mid);
  var right = arr.slice(mid);
  return merge(mergesort(left),mergesort(right));
}

var arr = [2,1,4,3,6,5,8,7,10,9];
console.log(mergesort(arr));
