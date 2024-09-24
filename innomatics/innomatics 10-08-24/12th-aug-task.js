// 
//1st question
//fetch("https://jsonplaceholder.typicode.com/users")
// .then(respose=>respose.json()).
// then(data=>console.log(data))


//2nd question
async function fetchData() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    console.log(data);
  }
  catch{
    console.log("ERROR")
  }
  
}
fetchData()

document.addEventListener("DOMContentLoaded",()=>{
  let tbody=document.querySelector("#table tbody")
  fetch("https://jsonplaceholder.typicode.com/users")//fetch apis returns promise
  .then((res)=>res.json()).
  then((data1)=>populated_data(data1))

  function populated_data(tableData){
    tableData.forEach((persons)=>{
      let trow=document.createElement("tr")
      trow.innerHTML=`
      <tr>
        <td>${persons.name}</td>
        <td>${persons.email}</td>
        <td>${persons.phone}</td>
        <td>${persons.website}</td>
      </tr>
      `
      tbody.appendChild(trow)
    })
  }
})
async function fetchData1() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
  try{
    
    if(!response.ok){
      throw new Error("invalid Url");
      
    }
    const data = await response.json();
    console.log(data);
  }
  catch (error){
    console.log("ERROR!"+Error)
  }
  
}
fetchData1()

async function fetchposts(){
  const response = await fetch("https://jsonplaceholder.typicode.com/photos")
  try{
    if(!response.ok){
      throw new Error("INVALID URL")
    }
    const data = await response.json()
    console.log(data);
  }
  catch{
    console.log("ERROR!"+Error)
  }
}
fetchposts()


//for getting specified posts to be printed
async function fetchposts1(){
  const response = await fetch("https://jsonplaceholder.typicode.com/photos")
  try{
    if(!response.ok){
      throw new Error("INVALID URL")
    }
    const data = await response.json()
    const filterpost=data.filter(post=> post.id>=600 && post.id<=609)
    console.log(filterpost)
  }
  catch{
    console.log("ERROR!"+Error)
  }
}
fetchposts1()
