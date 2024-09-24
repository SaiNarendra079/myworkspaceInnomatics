localStorage.setItem("Cricketer_Name","Virat Kohli")
localStorage.getItem("Cricketer_Name")

//output-'Virat Kohli'
sessionStorage.setItem("Cricketer_Name1","Virat Kohli")
sessionStorage.getItem("Cricketer_Name1")
//output- 'Virat Kohli'

//removing items from storage

localStorage.removeItem("Cricketer_Name")
sessionStorage.removeItem("Cricketer_Name1")
localStorage.getItem("Cricketer_Name")
//output- null
sessionStorage.getItem("Cricketer_Name1")
//output- null

//javascript object to store inn local storage and session storage

const obj={name:"viart kohli",role:"batsman"}
let details=JSON.stringify(obj)
localStorage.setItem("obj1",details)
localStorage.getItem("obj1")
//output '{"name":"viart kohli","role":"batsman"}'

const obj2={name:"viart kohli",role:"batsman"}
let details1=JSON.stringify(obj2)
sessionStorage.setItem("obj3",details1)
sessionStorage.getItem("obj3")
//output '{"name":"viart kohli","role":"batsman"}'

//clearing all the data in storages
localStorage.clear()
sessionStorage.clear()
localStorage.getItem("Cricketer_Name")
//output- null
localStorage.getItem("obj1")
//output - null
sessionStorage.getItem("Cricketer_Name1")
//output- null
sessionStorage.getItem("obj3")
//output- null
