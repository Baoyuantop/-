//插入排序
//将待排序数据分为以排序和未排序两个部分
//时间复杂度 O(n^2)
//基于比较
//空间复杂度O(1)  原地排序算法
//稳定的排序算法

var arr = new Array(2,1,4,3,6,5);

function charu(arr){
  for(var i=1; i<arr.length; i++){
    var value = arr[i];
    var j = i-1;
    //查找插入位置
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
