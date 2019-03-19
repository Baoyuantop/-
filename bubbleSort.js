//Bubble Sort
//Bubbling at least once returns an element to the correct position.
//Space complexity O(1), In situ sort algorithms.
//If the elements are equal in size, they are not exchanged.
//Time complexity O(n^2).
//Where it can be optimized: When there is no data exchange for a bubbling operation, the description has reached order,  we will not
//continue to perform subsequent bubbling operations.


var arr = new Array(2,1,4,3,6,5);
// Error example
function maopao(arr) {
  if(arr.length<1){
    return
  }
  for(var i=0; i<arr.length-1; i++){
    for(var j=1; j<arr.length-1-i; j++){
      if(arr[j]<arr[i]){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  return arr;
}
};
//Right example
function sortarr(arr){
  if (arr.length <= 1) {
    return
  }
    for(i=0;i<arr.length-1;i++){
      //exit the bubbling cycle flag early
      let flag = false;
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag = true;
            }
        }
        if (!flag) break;
    }
    return arr;
};

console.log(maopao(arr));
console.log(sortarr(arr));
