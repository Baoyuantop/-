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
    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
};

console.log(maopao(arr));
console.log(sortarr(arr));
