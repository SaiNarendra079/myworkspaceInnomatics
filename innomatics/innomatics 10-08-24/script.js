document.getElementById("login-form").addEventListener("submit",(e)=>{
  e.preventDefault()
  let username=document.getElementById("username").value
  let password=document.getElementById("password").value
  console.log(username,password)
  let cardcontainer=document.getElementById("cardcontainer")
  let card= document.createElement("div")
  let user=document.createElement("h3")
  let pin= document.createElement("p")

  user.textContent=username
  pin.textContent=password

  card.appendChild(user)
  card.appendChild(pin)

  cardcontainer.appendChild(card)

  document.getElementById("login-form").reset()
})