//map:-will create a new array and does not change original arrays and works on loop

//map we have return the itrtr and assign entire map to other variable -- by doing this it was creating new array but also changing original array so their is another thing.
//store same itrtr with spread operator  [...] square for array ,flower brackets for object{...} //so it calls by value //storing with spread operator is called shallow copy
//but shallow caopy deep copy problem we dont have  in case of normal variables 
//if we store arr1 in arr 2 directly it will store by reference

//limitation of shallow copy :- it will only create new data  in parent iteration only where as the child will change in both the arrays or objects
// to fix that we use let variablename=JSON.parse(JSON.stringify(itrtr))




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
let updated_students=students.map((itrtr,index)=>{
  let updatedItrtr=JSON.parse(JSON.stringify(itrtr))
  if(index===0)
    updatedItrtr.supplies.push('M3')
  if(index===1)
    updatedItrtr.supplies.unshift('physics')
  if(index===2)
    updatedItrtr.supplies.splice(1,0,'chemistry')
  if(index===3)
    updatedItrtr.supplies.splice(1,1,'dbms')
  if(index===4){
    updatedItrtr.supplies.pop()
    updatedItrtr.supplies.shift()
  }
  return updatedItrtr
})
console.log('____',students)
console.log('new',updated_students)