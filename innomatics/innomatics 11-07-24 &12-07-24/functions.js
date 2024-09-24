// module and modularization
// coupling and decoupling

// Functions

// also called as methods

// - functions are set of instructions
// -functions are reusable i.e. reusability is feature of function

//syntax:- function function_name(){}     simply keyword function_name(){}



// function mathCal(){
//   let a=10
//   let b=20

//   let sum=a+b
//   let multiply=a*b
//   let subtraction=a-b
//   let mod=a%b
//   console.log(sum)
//   console.log(multiply)
//   console.log(subtraction)
//   console.log(mod)
// }
// mathCal()  //this is called as declaration or function call or invokation . if we don't write this it will ogrone all. the execution the upper part is called definition



function mathCal(a,b){ //these are called arguments   a and b are arguments here
  // let a=10
  // let b=20

  let sum=a+b
  let multiply=a*b
  let subtraction=a-b
  let mod=a%b
  console.log(sum)
  console.log(multiply)
  console.log(subtraction)
  console.log(mod)
}
mathCal(10,20) //parameters 




//these are pure function:-will do only one job all the time i.e first function will do only sum, second only multiply etc
function sum(a,b){
  console.log(a+b)
}
function multiply(a,b){
  console.log(a*b)
}
function subtraction(a,b){
  console.log(a-b)
}
function mod(a,b){
  console.log(a%b)
}
sum(10,20)
multiply(10,20)
subtraction(10,20)
mod(10,20)

//substring 

// function substringWithoutSapces(inpStr){
//   let subStr=''
//   for(let i=0;i<=inpStr.length;i++){
//     if(inpStr[i].charCodeAt()===32)
//       break
//     subStr=subStr+inpStr[i]
//   }
//   console.log(subStr)
//   console.log(inpStr.substring(0,inpStr.indexOf(' ')))//it will directly print the sunstring until the space without using loop
// }
// substringWithoutSapces('sai narendra')



//for returning we have a keyword called return
function substringWithoutSapces(inpStr){
  let subStr=''
  for(let i=0;i<=inpStr.length;i++){
    if(inpStr[i].charCodeAt()===32)
      break
    subStr=subStr+inpStr[i]
  }
  // console.log(subStr)
  // console.log(inpStr.substring(0,inpStr.indexOf(' ')))//it will directly print the sunstring until the space without using loop
  return subStr //if we just give return and leave it will not give any output but it will run so to get the output we store the return value and console that hr=ere we stored return value as result
}
let result1=substringWithoutSapces('sai narendra')
console.log(result1)