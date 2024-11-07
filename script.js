let container=document.querySelector(".container");
let btn=document.querySelector("#btn");
let title=document.querySelector("#title");
let img_box=document.querySelector("#img_box");

let url='https://meme-api.com/gimme' ;
async function memegenerator(){
   let meme_img=await fetch(url);
   let json_data=await meme_img.json();

   console.log(json_data);
   title.innerHTML=json_data.title;
   img_box.setAttribute("src",json_data.url)
}
btn.addEventListener("click",memegenerator);
