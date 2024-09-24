//create,read,update,delete -- crud operations
let evenNum=[2,4,6,8] //create
console.log(evenNum)//read
 //adding and element in an  created array - syntax name.push(value)
 //push will add element at end of an array

 //update
 evenNum.push(10)
 console.log(evenNum)

 //to add an number at starting of an array - syntax name.unshift(value)
 evenNum.unshift(0)
 console.log(evenNum)

 //delete - we use pop --pop will delete element at end of an array
 evenNum.pop()
 console.log(evenNum)

//  shift() will delete element at start of an array
evenNum.shift()
console.log(evenNum)
//---------------------------------

//adding element at middle of an array
let evenNos=[2,4,8,10] //create
console.log(evenNos)//read
 

//splice is an array function similar to push pop shift unshift
// using splice we can add or delete element at an index
//splice syntax -- splice(start index, delete count,what we want to insert)
//to delete splice(start index,delete count)
evenNos.splice(2,0,6)
console.log(evenNos)
//to delete splice(start index,delete count)
// evenNos.splice(2,1)
// console.log(evenNos)

//to replace splice(start index,delete count,replaced value)
evenNos.splice(2,1,100)
console.log(evenNos)
//splice another synatx is (start index , count)
//splice will distrud the original array

//delete
evenNos.splice(2,3)
console.log(evenNos)

// other array function  . these are the functions we use most
// slice
// map
// filter
// find
// findIndex
// reduce
// forEach
// indexOf

//slice -- array.slice(startindex , end index) for example we want 8th index also we should give end index as 9 so that it will print 5,6,7,8 indexs
//slice will create new array it will not change original array
let array=[1,2,3,4,5,6,7,8,9,10]
let slicedArr= array.slice(5,9)
console.log(slicedArr)
console.log(array)

//diff b/w slice and splice -- slice does not distrub original array but splice will distrub the orriginal array

let array1=[1,2,3,4,5,6,7,8,9,10]
let splicedArr= array1.splice(5,5)
console.log(splicedArr)
console.log(array1)
//-------------------------------------------


//split-- coverts string to array by the seperator we have given
let Name='Sai Narendra'
let nameSplit=Name.split(' ')
console.log(nameSplit)

//join combine array elements into string
let Movie=['Bahubali','1']
console.log(Movie.join(''))

//split and join combinedly
console.log('sai narendra'.split().join())