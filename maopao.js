//冒泡算法
//一次冒泡至少可以让一个元素到正确的位置上
//空间复杂度O(1)  原地排序算法
//元素大小相等的时候不交换，所以是稳定算法
//时间复杂度O(n^2)
//可以优化的地方:当某次冒泡操作没有数据交换的时候，说明已经达到完全有序，不用再继续执行后续的冒泡操作


var arr = new Array(2,1,4,3,6,5);
// 错误示例
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
//正确冒泡
function sortarr(arr){
  if (arr.length <= 1) {
    return
  }
    for(i=0;i<arr.length-1;i++){
      //提前退出冒泡循环标志位
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
