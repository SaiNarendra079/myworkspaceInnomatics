//call,apply,bind methods

function sample(message){
  console.log(`hi ${this.name} ${message}`)
}
// sample()   by this the output will be undefined till this line
const person={
  name:'sai',
 }
// sample.call(person,"good morning") //output hi sai good morning


 //apply
//in this the arugument's parameter is taken in an array while calling the function

// sample.apply(person,["Good Morning!"])
let newSample=sample.bind(person)
newSample("Good morning")


let person1={
  greet(a,b,c){
    console.log(`hi ${this.name}, ${a}-${b}-${c} `)
  }
}
let heamnth={
  name:'hemanth'
}
let sai={
  name:'sai'
}
let vinay={
  name:'vinay'
}
person1.greet.call(heamnth,1,2,3)
person1.greet.apply(sai,[1,2,3])
let vinayfun= person1.greet.bind(vinay)
vinayfun(1,2,3)