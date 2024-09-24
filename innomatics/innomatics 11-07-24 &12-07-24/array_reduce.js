//reduce
// reduce has two arguments or parameters those are call back function and initialization
// i.e reduce(()=>,0)



let array=[1,2,3,4,5,6,7,8,9,10]
//acc=accumulator or we can any thing just to store the value 
let sum=array.reduce((acc,iterator)=>{
  return acc=acc+iterator
},0)
console.log(sum)

// let array2=new Array(30).fill()
// array2= array2.map((iter,index)=>index+1)
// console.log(array2)

//  or 
//let array2=new Array(30).fill(1)
// array2= array2.map((iter,index)=>index+1)
// console.log(array2)

//or
let array2=new Array(30).fill(1).map((iter,index)=>index+1)
console.log(array2)
let arr=array2.reduce((acc,itrtr)=>{
  if(itrtr%2===0) 
    return acc=acc+itrtr
  else
   return acc
},0)
console.log(arr)
//sum of even numbers b/w 1-30 
//or
let array1=new Array(30).fill().map((itrtr,index)=>index+1).reduce((acc,itrtr)=>
  itrtr%2===0?acc=acc+itrtr:acc=acc
,0)
console.log(array1)

//object of array 

let Sai=[
  {
    sub_name:'M1',
    marks:90
  },
  {
    sub_name:'DSA',
    marks:70
  },
  {
    sub_name:'CNS',
    marks:80
  },
  {
    sub_name:'PYTHON',
    marks:50
  },
  {
    sub_name:'JAVA',
    marks:50
  }
]
let Vinay=[
  {
    sub_name:'M1',
    marks:60
  },
  {
    sub_name:'DSA',
    marks:90
  },
  {
    sub_name:'CNS',
    marks:40
  },
  {
    sub_name:'PYTHON',
    marks:70
  },
  {
    sub_name:'JAVA',
    marks:60
  }
]

//two add two arrays we use spread operator 
//ex let arr3=[arr1,...arr2] (or) let arr3=[..arr1,...arr2] (or)
//for array of objects also same 


let student=[{Sai:[...Sai]},{Vinay:[...Vinay]}]
console.log(JSON.stringify(student))
 
let total=student.map((stu,index)=>{
  if(index===0){
    return{
      sai_total:stu.Sai.reduce((acc,itrtr)=>acc=acc+itrtr.marks,0)
    }
  }
  if(index===1){
    return{
      Vinay_total:stu.Vinay.reduce((acc,itrtr)=>acc=acc+itrtr.marks,0)
    }
  }
})
console.log(total)