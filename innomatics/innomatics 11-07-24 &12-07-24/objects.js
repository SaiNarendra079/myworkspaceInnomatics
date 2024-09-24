// key pair value = json Object

// syntax of object --
// {
//   key:value,
// }


// let student_1={
//   name:'Sai Narendra',
//   age:20,
//   phonenum:83748732199,
// }
let student_2={
  name:'Vinay',
  age:21,
  phonenum:83748732199,
  male:true,
  address:{
    pincode:530026,
    landmark:'dkw',
  }
}
let student_3={
  name:'Vamsi',
  age:20,
  phonenum:83748732199,
  'Email Id':'kattavamsi2gmail.com'
}

console.log(typeof student_2)

//object.key gives values ex
console.log(student_3.name)
console.log(student_2.address.pincode)

//if we want to write keys with spaces we should write them with in a single qoutes ex-- 'Email Id' and we should return them not by dot we should write
//console.log(object['key'])--for space with key
console.log(student_3['Email Id'])