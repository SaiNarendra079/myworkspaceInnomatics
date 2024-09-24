function ABC(){}
let abc=new ABC()
console.log(abc.__proto__)

let personObject={
  greet(){
    console.log(`Hi ${this.name}`)
  }
}
console.log('ppp')