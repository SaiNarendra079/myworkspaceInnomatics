let cardcontainer = document.getElementById("cardcontainer")
let allTOdos = []
document.addEventListener('DOMContentLoaded', () => {
  console.log(localStorage.getItem('allToDos'))
  if (localStorage.getItem('allToDos') !== null){
    allTOdos = JSON.parse(localStorage.getItem('allToDos'))

    allTOdos.forEach(todo => {
      console.log(todo)
      populate_data(todo)
    })
  }
  
})

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault()
  let title = document.getElementById("title").value
  let description = document.getElementById("description").value
  let category = document.getElementById("category").value
  let taskPriority = document.getElementById("taskPriority").value
  console.log(title, description, category, taskPriority)
  let obj = {
    title: title,
    description: description,
    category: category,
    taskPriority: taskPriority,
  }
  allTOdos.push(obj)
  localStorage.setItem('allToDos', JSON.stringify(allTOdos))
  populate_data(obj)
})

function populate_data(card_data) {

  // let cardcontainer=document.getElementById("cardcontainer")
  let card = document.createElement("div")
  // let title1 = document.createElement("h3")
  // let description1 = document.createElement("p")
  // let category1 = document.createElement("p")
  // let taskPriority1 = document.createElement("p")
  // let btn = document.createElement("button")
  // card.className = "card"
  // card_data.title1 = title
  // card_data.description1 = description
  // card_data.category1 = category
  // card_data.taskPriority1 = taskPriority
  // card_data.btn = "delete"
  // btn.id = "delete"
  // card.appendChild(title1)
  // card.appendChild(description1)
  // card.appendChild(category1)
  // card.appendChild(taskPriority1)
  // card.appendChild(btn)
  card.className="card"
  card.innerHTML=`
  <h3>${card_data.title}</h3>
  <p>${card_data.description}</P>
  <p>${card_data.category}</P>
  <p>${card_data.taskPriority}</P>
  `
  let btn = document.createElement("button")
        btn.innerHTML = "Delete"
        btn.className = "delete"
        card.appendChild(btn)

  cardcontainer.appendChild(card)
  btn.addEventListener('click', () => {
    let closestcard = btn.closest('.card')
    closestcard.remove()

  })

}