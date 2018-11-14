//快速排序
//时间复杂度大部分情况下是O(nlogn),极端情况是O(n^2)
//关键是合理的选择pivot

function kuaipai(arr) {
  if(arr.length <= 1){
    return arr;
  }
  //选择基准，并与原数组分离
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex,1)[0];
  //用两个数组放一左一右两个子集
  var left =[];
  var right = [];
  //遍历数组，小于基准的放左边，大于基准的放右边
  for(var i=0; i<arr.length; i++){
    if(arr[i]<pivot){
      left.push(arr[i]);
    }else if(arr[i]>pivot){
      right.push(arr[i]);
    }
  }
  //使用递归重复调用
  return kuaipai(left).concat([pivot],kuaipai(right));
}

var arr = [2,1,4,3,6,5,8,7,10,9];
console.log(kuaipai(arr));
