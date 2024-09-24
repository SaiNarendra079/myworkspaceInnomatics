let a=1
var sum=0
for(a=1;a<11;a++)
{
  sum=sum+a
}
console.log(sum)

//even Numbers
for(let i=1;i<=30;i++)
{
  if(i%2===0)
    console.log(`${i} is a even number`)
}




//char to ascii value we use this
console.log('A'.charCodeAt())
console.log('Z'.charCodeAt())

//ascii value to char
console.log(String.fromCharCode(90))
//vowels or not
//for(let j=65;j<=122;j++)
//{
 // if(j===65 || j===69 || j===73 || j===79 || j===85 ||j===97 || j===101 || j===105 ||j===111 ||j===117)
  //{
    //console.log(String.fromCharCode(j)+' is an vowel')
  //}
//}

// for(let j=97;j<=122;j++)
// {
//   if(String.fromCharCode(j)=='a'||String.fromCharCode(j)=='e'||String.fromCharCode(j)=='i'||String.fromCharCode(j)=='o'||String.fromCharCode(j)=='u')
//     console.log(String.fromCharCode(j))
// }


//palindrome program
// let input = "AMMA"

// let output =""
// for(var i=input.length;i>-1;i--){
//   output=output+input.charAt(i)
//   if(i===0){
//     if(output===input)
//       console.log("Given input is a palindrome")
//     else{
//       console.log("Given input is not a palindrome")
//     }
//   }
// }

 let theStr = 'The quick brown fox jumps over the lazy dog'.toLowerCase()
 let str1=''
for(let i=0;i<=theStr.length;i++){
  if(str1.indexOf(theStr.charAt(i))===-1)
    str1=str1+theStr.charAt(i)
}
console.log(str1)
counter=0
 for(let i=0;i<str1.length;i++){
   if(str1[i].charCodeAt()>=97 && str1[i].charCodeAt()<=122)
    counter=counter+1
 }
 if(counter===26)
  console.log('Pangram')
else
console.log('not a Pangram')

// let str='hello'
// let str1=''
// for(let i=0;i<=str.length;i++){
//   if(str1.indexOf(str.charAt(i))===-1)
//     str1=str1+str.charAt(i)
// }
// console.log(str1)

// let string='sai narendra'.toUpperCase()
// let str2=''
// for(let i=0;i<string.length;i++)
//   if(str2.indexOf(string.charAt(i))===-1)
//     str2=str2+string.charAt(i)
// console.log(str2)
// let count=0
// for(i=0;i<str2.length;i++)
//   if(str2[i].charAt(i)>=65 && str2[i].charAt(i<=90))
//     count=count+1

// if(count===26)
//   console.log('pangram')
// else{
//   console.log('not a panagram')
// }


