document.addEventListener("DOMContentLoaded",()=>{
  let cards=document.getElementById("cardcontainer")
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>response.json()).
  then((data)=>populated_data(data))
  function populated_data(card_data){
    card_data.forEach((persons)=>{
      let card_div=document.createElement("div")
      card_div.innerHTML=`
      <p>${persons.name}<p>
      <p>${persons.email}<p>
      <p>${persons.website}<p>
      <p>${persons.phone}<p>
      `
      cards.appendChild(card_div)
    })
  }
})