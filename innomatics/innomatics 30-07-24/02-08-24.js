let btn=document.getElementById("btn1")
btn.style.color="skyblue"
btn.addEventListener("click",()=>{
  console.log("external js")
})

let head= document.getElementsByClassName("cricketers")
for(i=0;i<head.length;i++){
  if(i===5){
    head[i].style.color="red"
  }
}
let txt=document.querySelector(".sample");
let btn2=document.getElementById("btn2");
btn2.addEventListener("click",()=>{
  document.body.classList.add(sample)
})