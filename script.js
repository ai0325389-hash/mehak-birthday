function showGallery(){

const gallery=document.getElementById("gallery");

if(gallery.style.display==="grid"){
gallery.style.display="none";
}else{
gallery.style.display="grid";
gallery.scrollIntoView({
behavior:"smooth"
});
}

}

// Floating hearts
const hearts=document.querySelector(".hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.animation="float 6s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},600);
