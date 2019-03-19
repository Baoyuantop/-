//Insert sort
//Divide the data to be sorted into two parts, sorted and unsorted.
//Time complexity O(n^2).
//Based on comparison.
//Space complexity O(1)
//In-place sorting algorithm.
//Stable sorting algorithm.

var arr = new Array(2,1,4,3,6,5);

function charu(arr){
  for(var i=1; i<arr.length; i++){
    var value = arr[i];
    var j = i-1;
    //Find the insertion location
    for(;j>=0; j--){
      if(arr[j]>value){
        arr[j+1] = arr[j]
      }else{
        break;
      }
    }
    arr[j+1]  = value;
  }
  return arr;
}

newArr = charu(arr);
console.log(newArr);
