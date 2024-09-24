window.addEventListener("load",()=>{
  console.log("page completely loaded")
})

let array1=[
  {
    country:'Australia',
    OdiWorldcup:'Won',
    t20IWorldCup:'Won',
    ChampionsTrophy:'Won',
    WTC:'Won'
  },
  {
    country:'England',
    OdiWorldcup:'Won',
    t20IWorldCup:'Won',
    ChampionsTrophy:'yet to win',
    WTC:'yet to win'
  },
  {
    country:'India',
    OdiWorldcup:'Won',
    t20IWorldCup:'Won',
    ChampionsTrophy:'Won',
    WTC:'yet to win'
  },
  {
    country:'Newzeland',
    OdiWorldcup:'yet to win',
    t20IWorldCup:'yet to win',
    ChampionsTrophy:'Won',
    WTC:'Won'
  },
  {
    country:'pakistan',
    OdiWorldcup:'Won',
    t20IWorldCup:'Won',
    ChampionsTrophy:'Won',
    WTC:'yet to win'
  },
  {
    country:'WestIndies',
    OdiWorldcup:'Won',
    t20IWorldCup:'Won',
    ChampionsTrophy:'Won',
    WTC:'Yet to win'
  }
]


document.addEventListener("DOMContentLoaded",()=>{
  console.log("inner event")
  let tbody=document.querySelector("#table1 tbody")
  fetch("https://jsonplaceholder.typicode.com/users")//fetch apis returns promise
  .then((response)=>response.json()).
  then((data)=>populated_data(data))

  function populated_data( table_data){
    table_data.forEach((countries)=>{
      let trow=document.createElement("tr")
      trow.innerHTML=`
      <tr>
        <td>${countries.name}</td>
        <td>${countries.email}</td>
        <td>${countries.phone}</td>
        <td>${countries.website}</td>
        <td>${countries.id}</td>
      </tr>
      `
      tbody.appendChild(trow)
    })
  }
})
console.log("outside event")