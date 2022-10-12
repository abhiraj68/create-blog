import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();



document.querySelector("#publish").addEventListener("click",async()=>{
event.preventDefault();
let blogData={
    title:document.getElementById("title").value,
    body:document.getElementById("body").value,
    author:document.getElementById("author").value
}

let res=await fetch(`http://localhost:3000/blogs`,{
    method:"POST",
    body:JSON.stringify(blogData),
    headers:{
        "Content-Type": "application/json"
    }
})
location.href="../index.html"
});