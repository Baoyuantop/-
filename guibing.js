//归并排序
//时间复杂度 O(nlogn)
//空间复杂度 O(n)
//不是原地排序算法
//稳定排序算法


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
