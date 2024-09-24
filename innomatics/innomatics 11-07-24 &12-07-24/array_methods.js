//array methods- forEach, map, reduce,filter,find,findIndex,some


//array of objects
let students = [
  {
    name:'sai narendra',
    gender:'male',
    age:20,
    phn:3892020930,
    address:{
      pincode:530026,
      landmark:'gajuwaka',
    },
    supplies:['m1','flat','dsa']
  },
  {
    name:'Katta Vamsi',
    gender:'male',
    age:20,
    phn:2020185858,
    address:{
      pincode:530026,
      landmark:'near rk beach',
    },
    supplies:['m2','Cns','CO']
  },
  {
    name:'Durga Prasad',
    gender:'male',
    age:21,
    phn:9547812587,
    address:{
      pincode:500085,
      landmark:'kphb',
    },
    supplies:['CN','JAVA','SE']
  },
  {
    name:'Rohit vinay',
    gender:'male',
    age:22,
    phn:8742136549,
    address:{
      pincode:530026,
      landmark:'gajuwaka',
    },
    supplies:['m3','flat','python']
  },
  {
    name:'Prasanth',
    gender:'male',
    age:20,
    phn:6148523546,
    address:{
      pincode:530012,
      landmark:'jntu bustand',
    },
    supplies:['p&s','flat','dsa']
  },
]

//forEach:- an array method that is used to loop an array.
//forEach will not create a new array

//arrow function or normal function our wish which is anonymous
//students.forEach((iterator,index)={})
students.forEach((itrtr,index)=>{
  // console.log(itrtr) //every object is printed
  // console.log(`At index ${index} we have ${itrtr}`) 
  // console.log(`At index ${index} we have ${JSON.stringify(itrtr)}`)  //every object with its index is printed
  // console.log(`Age of ${itrtr.name} is ${itrtr.age}`)
  // console.log(`phn of ${itrtr.name}  is ${itrtr.phn} and pincode is ${itrtr.address.pincode}`)

  //for first(i.e index=0)student add supply at end
  //for second (i.e index=1)  add at the start
  //for third  (i.e index=2) add at index 1
  //for fourth (i.e index=3) replace any subject with other
  //for fifth (i.e index=4) remove both starting and ending
  if(index===0)
    itrtr.supplies.push('M3')
  if(index===1)
    itrtr.supplies.unshift('physics')
  if(index===2)
    itrtr.supplies.splice(1,0,'chemistry')
  if(index===3)
    itrtr.supplies.splice(1,1,'dbms')
  if(index===4){
    itrtr.supplies.pop()
    itrtr.supplies.shift()
  }
})
console.log('____',students)