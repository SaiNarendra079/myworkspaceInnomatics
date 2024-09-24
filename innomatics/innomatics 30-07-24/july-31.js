let oldData={
  name:'sai',
  age:'20',
  phnNumber:[1234567890,8398493849],
  gender:true,
  address:{
    pincode:500085,
    landMark:['KPHB','HYD']
  },
  occupation:'Software Engineer'
}

let newData={
  name:'sai narendra',
  age:'21',
  phnNumber:[1234567890,8398493849,9133850778],
  gender:true,
  address:{
    pincode:500085,
    landMark:['shiva sai pg','KPHB','HYD']
  },
  email:'sainarendra@gmail.com'
}
function mergeObjects(oldObject,newObject){
  let result={...oldObject}
  Object.keys(newObject).forEach((itrtr)=>{
    if(oldObject[itrtr]){
      if(typeof newObject[itrtr]==="string"||typeof newObject[itrtr]==="number"||typeof newObject[itrtr]==="boolean"){
        if(newObject[itrtr]!==oldObject[itrtr]){
          result[itrtr]=newObject[itrtr]
        }
      }
      else{
        if(Array.isArray(newObject[itrtr])){
          result[itrtr]=[...new Set([...newObject[itrtr],...oldObject[itrtr]])] //new Set used to remove duplicates and the it return as set to return as array we use array of spread operator new Set()
        }
        else{
          result[itrtr]=mergeObjects(oldObject[itrtr],newObject[itrtr])
        }
      }
    }
    else{
      result[itrtr]=newObject[itrtr]
    }
  });
  return result
}
console.log(mergeObjects(oldData,newData))