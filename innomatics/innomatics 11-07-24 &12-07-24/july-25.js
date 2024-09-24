const sumOf =() =>{
  let cache={}
  return (a,b)=>{
    console.log(cache)
    let str=a.toString()+b.toString()
    if(cache[str]){
      console.log('output from cache')
      return cache[str]
    }
    console.log('output calculated')
    let result =a+b
    cache[str]=result
    return result
  }
}
let container=sumOf()
console.log(container(1,2))
console.log(container(3,4))
console.log(container(5,6))
console.log(container(7,8))
console.log(container(1,2))