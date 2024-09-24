//filter:- filter also creates new array but it filter and gives 

let smash_karts_teams=[
  {
    name:'Sai',
    section:'Blue'
  },
  {
    name:'Infinity',
    section:'Blue'
  },
  {
    name:'Chakri',
    section:'Blue'
  },
  {
    name:'Denji',
    section:'Blue'
  },
  {
    name:'Aki',
    section:'Red'
  },
  {
    name:'Njr',
    section:'Red'
  },
  {
    name:'Goku',
    section:'Red'
  },
  {
    name:'Garuda',
    section:'Red'
  },
  {
    name:'DP',
    section:'Neutral'
  },
  {
    name:'Puli',
    section:'Neutral'
  },
  {
    name:'Abhi',
    section:'Deactive'
  }
]
let A_Section_Students=smash_karts_teams.filter((student)=>{//here student is iterator
  if(student.section==='Blue')
    return student
})
let B_Section_Students=smash_karts_teams.filter((student)=>{
  if(student.section==='Red')
    return student
})
let C_Section_Students=smash_karts_teams.filter((student)=>{
  if(student.section==='Neutral')
    return student
})
let D_Section_Students=smash_karts_teams.filter((student)=>{
  if(student.section==='Deactive')
    return student
})
let A_D_Section_Students=smash_karts_teams.filter((student)=>{
  if(student.section==='Blue'||student.section==='Deactive')
    return student
})
console.log(A_Section_Students)
console.log(B_Section_Students)
console.log(C_Section_Students)
console.log(D_Section_Students)
console.log(A_D_Section_Students)

//findIndex
let index_of_NJR= smash_karts_teams.findIndex((student)=>student.name==='Njr')
console.log(index_of_NJR)

//find: if we want to find something and get it we use find
let Find_NJR= smash_karts_teams.find((student)=>student.name==='Njr')
console.log(Find_NJR)
//if we want to find something that is no there we get undefined

//some:- it will return boolen if exsit return true else false

let is_NJR= smash_karts_teams.some((student)=>student.name==='Njr')
console.log(is_NJR)