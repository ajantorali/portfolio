const menubtn = document.querySelector('#menu');
const menubtn2 = document.querySelector('.nav_list');
const menubtn3 = document.querySelector('#myLinks');
const menubtn4 = document.querySelector('#menux');


menubtn.onclick = ()=>{
    menubtn2.classList.add("active1");
    menubtn3.classList.add("active2");
    menubtn.classList.add("active3");
    menubtn4.style.display = "block";
}

menubtn4.onclick = ()=>{
    menubtn2.classList.remove("active1");
    menubtn3.classList.remove("active2");
    menubtn.classList.remove("active3");
    menubtn4.style.display = "none";
}

