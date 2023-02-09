let hambugerMenu=document.querySelector(".hambugerMenu");
let nav=document.querySelector(".nav");
let body=document.querySelector(".body");
let moonIcon=document.querySelector(".darkModeIcon");
let linkItems=document.querySelectorAll("ul li a");

linkItems.forEach(link =>{
    link.addEventListener("click", function(){
        nav.classList.toggle("navActive");
    })
})

moonIcon.addEventListener("click", function(){
    //change colors of the web with classlist
    body.classList.toggle("darkMode");

    //change the icon
    let condition=moonIcon.classList.contains("fa-moon");

    if(condition){
        moonIcon.classList.remove("fa-moon");
        moonIcon.classList.add("fa-sun");
        moonIcon.style.cursor="pointer";
        moonIcon.style.transition=".3s ease";
    }else{
        moonIcon.classList.remove("fa-sun");
        moonIcon.classList.add("fa-moon");
    }

    nav.classList.toggle("navActive");
})



//Hambuger Menu

hambugerMenu.addEventListener("click", function(){
    nav.classList.toggle("navActive");
});

//Scroll Effect

body.addEventListener("scroll", function(){
    let scrollinglevel=body.scrollTop;
    nav.classList.toggle("navScrolling", scrollinglevel>20);
});