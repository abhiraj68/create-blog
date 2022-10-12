import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();
console.log("hii   ")

import {getData} from "../components/getdata.js"
const initFunction=async () =>{
    let data=await getData('http://localhost:3000/blogs');
    appendData(data)
}
initFunction()

const appendData = (data) =>{

    data.forEach(el => {
        console.log(el);
        let tr=document.createElement('tr');
        let id=document.createElement('td');
        id.innerText = el.id;
        let title=document.createElement('td');
        title.innerText = el.title;
        let author=document.createElement('td');
        author.innerText = el.author;
        let view=document.createElement('td');
        view.innerHTML= `<button>VIEW</button>`;
        view.onclick= () =>{
            location.href="../pages/view.html"
            localStorage.setItem('id', el.id);
        }
        let edit=document.createElement('td');
        edit.innerHTML= `<button>EDIT</button>`;
        edit.onclick= () =>{
            location.href="../pages/edit.html"
            localStorage.setItem('id', el.id);
        }
        
        let del=document.createElement('td');
        del.innerHTML= `<button>DELETE</button>`;
        del.onclick= async () =>{
            await fetch(`http://localhost:3000/blogs/${el.id}`,{
                method:"DELETE"
            }
            
            )
            location.reload()
        }
        tr.append(id,title,author,view,edit,del)
        document.getElementById("tBody").append(tr)

    });
}
