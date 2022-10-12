import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

import { getData } from "../components/getdata.js";
const id=localStorage.getItem("id");


const blog= async (id) =>{
    let res=await getData(`http://localhost:3000/blogs/${id}`);

    let titile=document.createElement("h2");
    titile.innerText=`Title:${res.title}`;
    let body=document.createElement("p");
    body.innerText=res.body;
    let author=document.createElement("p");
    author.innerHTML=`<em>${res.author}</em>`

    document.getElementById("blogContainer").append(titile,body,author)
}

blog(id)