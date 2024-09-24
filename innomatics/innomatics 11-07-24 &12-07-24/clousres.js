//closures

// function parent(){
//   let a=10
//   function child(){
//     console.log(a)
//   }
//   child()
// }
// parent()

function getCounter(){
  let counter=0
  return function(){//it is an anonymous function because it has no name
    return counter = counter+1
  }
}
// console.log(getCounter())//if we give this it will only return the getcounter function which returns anonymous function
console.log(getCounter()())//here we are using parent so every time we call it it will inititalize the counter to 0 and then adds
console.log(getCounter()())
let theCounter = getCounter()//the anonymous function is storing in a variable so thst it self becomes a function now
console.log(theCounter())//but here we are only returning child so for the first time it will inititalize the counter to 0 and then adds so here output will be 1
console.log(theCounter())//here 1+1=2 like this it will consider the previous call and add based on that it will return

setTimeout(function(){
  console.log('sai')
},1000)//after 1 seconds it will return the output


//clousues,var & let Scoping
// for(var i=0;i<5;i++){
//   setTimeout(function(){
//     console.log(i)
//   },1000)
// }
for(let i=0;i<5;i++){
  setTimeout(function(){
    console.log(i)
  },1000)
}//it was behaving differently while using var and let so research on it

//arrow function
//xyz()
var xyz=()=>{
  console.log('sai narendra')
}
xyz()

//normal function
//abc()
function abc(){
  console.log('sai narendra')
}
abc()
//difference between arrow function and noraml function is if we call function before intitalization in noraml function then also it gives output but in arrow function it gives error

//call back function

function ABC(number,cb){
  number=number*2
  cb(number)
}
ABC(10,(inptNum)=>{
  console.log(inptNum)
})

function parent(number){
  let a=20
  function child(){
    console.log(number*a)
  }
  child()
}
parent(10)


//higher order functions (hoc)

function add(func){
  return()=>{
    let a=func(10)
    return a+30
  }
}
const multiply=(b)=>{
  return b*2
}
const mod=(c)=>{
  return c%2
}
console.log(add(multiply)())
console.log(add(mod)());

//immediately invoke function -also a anonymous function
//syntax- (()=>{})()  //wrap entire thing in round braces and then call ()


(function(){
  console.log('sai')
})();
//recursion

