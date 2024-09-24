function maxSubarray(array,k){
  let maxSum=0;
  let windowSum=0;
  for(let i=0;i<k;i++){
    windowSum +=array[i]
  }
  console.log(windowSum)
  if(windowSum>maxSum){
    maxSum=windowSum
  }
  for(let i=k;i<array.length;i++){
    windowSum=(windowSum-array[])
  }
}
maxSubarray([4,90,20,45,87,3,2,56],4)