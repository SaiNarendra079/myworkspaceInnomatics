//prototype inheritance

//everything in js is object
//inhertiance- accessing parent class propeties inside instance/class


//for every object by default in json _proto_ function is added it points to prototype
//__proto__//it points to objects prototype

let person={name:'sai'}
console.log(person.__proto__) //output: [Object: null prototype] {} //even for empty object in this case this the output
console.log(Object.prototype) //output: [Object: null prototype] {}    //object is a predefined class
console.log(person.__proto__===Object.prototype) //true


//another way of creating objects
function persons(name){
  this.name=name
  //this indicates context
}
let hemanth =new persons('sai')
console.log(hemanth) //persons { name: 'sai' }
let hemanth2 =new persons('narendra')
console.log(hemanth2)  //persons { name: 'narendra' }
console.log(hemanth.__proto__) //output: {}
console.log(persons.prototype) //output: {}
console.log(hemanth.__proto__===Object.prototype) //false because in previous example we are creating object using default object creator but here we are using our own prototype to create an object


function Animal(name,eats){
  this.eat=eats
  this.name=name
}
let Dog =new Animal('Dog',true)
let Cat = new Animal('Cat',false)

Animal.prototype.walks=function(){
  console.log(`${this.name} ${this.eats} ? 'will eat' : 'will not eat' and also walks`)
}
Dog.walks()
Cat.walks()