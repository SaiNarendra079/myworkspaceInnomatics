function saveData(e){
  e.preventDefault();
  let username= document.getElementById("username").value;
  let email= document.getElementById("email").value;
  let password= document.getElementById("password").value;
  let address= document.getElementById("address").value;
  // console.log(username , email, password,address)

  const newUser={
    username: username,
    email: email,
    password:password,
    address:address,
  }
  const storedData= localStorage.getItem("users");
  let ArrayData= storedData? JSON.parse(storedData) : [];

  ArrayData.push(newUser);
  localStorage.setItem("users", JSON.stringify(ArrayData))
}


async function getApi(){
  let url= "https://fakestoreapi.com/products";
  let response= await fetch(url);
  let data = await response.json();
  console.log("API responses",data)
}
getApi()