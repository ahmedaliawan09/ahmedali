let iconn= document.getElementById("iconn");
let nav=document.getElementById("12");
 iconn.onclick=function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        iconn.src="moon.png"
        nav.style.backgroundColor ='#B6EADA';
    }
    else {
        iconn.src="brightness.png"
        nav.style.backgroundColor ='white';
    }
 }
