//destructuring
//array destructuring
let vehicles=["Innova", "Trihump -tiger", "AshokLeyland"]
let [car,bike,truck]=vehicles
console.log(car);
console.log(bike)
console.log(truck);


//object destructuring
let student={
  name:"Sai Narendra",
  age:20,
  role:"Full Stack Developer"
}

let{name:FullName, role:position}=student
console.log(`my name is ${FullName} and i work as a ${position}`)


function vowels(vowel,timeout){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log(vowel)
      resolve()
    }, timeout);
  })
}
// function callVowels(){
//   vowels("A",2000)
//   .then(()=>vowels("E",3000))
//   .then(()=>vowels("I",5000))
//   .then(()=>vowels("O",1000))
//   .then(()=>vowels("U",2000))
//   .catch((error)=>confirm.log(error))
// }
// callVowels()

async function callVowel(){
  await vowels("A",2000)
  await vowels("E",3000)
  await vowels("I",5000)
  await vowels("O",1000)
  await vowels("U",2000)
}
callVowel()