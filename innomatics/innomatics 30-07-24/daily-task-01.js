let btn = document.getElementById("click");
btn.style.backgroundColor="blue";
btn.style.fontSize="35px"

let nextElement = document.getElementsByClassName("para");
for(i=0;i<nextElement.length;i++){
  nextElement[i].style.color="red";
}
let head= document.getElementsByTagName("h1");
for(i=0;i<head.length;i++)
  if(i==2)
  head[i].style.border="1px solid"

document.querySelector(".sample").style.fontStyle= 'italic'

let selectAll=document.querySelectorAll(".span");
selectAll.forEach(element =>{
  element.style.margin="50px";
  element.style.backgroundColor="blue";
})

const uniqueElementAboutMe = document.getElementById('uniqueElement');
uniqueElementAboutMe.style.backgroundColor = 'green';
uniqueElementAboutMe.style.color='white';
uniqueElementAboutMe.style.padding = '20px';
uniqueElementAboutMe.style.fontFamily = 'Arial, sans-serif';
