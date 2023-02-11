let hambugerMenu=document.querySelector(".hambugerMenu");
let nav=document.querySelector(".nav");
let body=document.querySelector(".body");
let moonIcon=document.querySelector(".darkModeIcon");
let linkItems=document.querySelectorAll("ul li a");

linkItems.forEach(link =>{
    // Close the hamurger menu when clicking on the links
    link.addEventListener("click", function(e){
        nav.classList.toggle("navActive");

    })

})

moonIcon.addEventListener("click", function(){
    //change colors of the web with classlist
    body.classList.toggle("darkMode");

    //change the icon
    let condition = moonIcon.classList.contains("fa-moon");

    if (condition) {
        moonIcon.classList.remove("fa-moon");
        moonIcon.classList.add("fa-sun");
        moonIcon.style.cursor="pointer";
        moonIcon.style.transition=".3s ease";
        localStorage.setItem("theme", "dark");
    } else {
        moonIcon.classList.remove("fa-sun");
        moonIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }

    nav.classList.toggle("navActive");
})


//Check which theme was selected

window.addEventListener("load", function() {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        body.classList.add("darkMode");
        moonIcon.addEventListener("click", function(){
            localStorage.setItem("theme", "light");
        })
    }
});

//Hambuger Menu

hambugerMenu.addEventListener("click", function(){
    nav.classList.toggle("navActive");
});

//Scroll Effect

body.addEventListener("scroll", function(){
    let scrollinglevel=body.scrollTop;
    nav.classList.toggle("navScrolling", scrollinglevel>20);
});



// Hover effect on the nav links

linkItems.forEach(link =>{

    link.addEventListener("mouseover", function(e){

        for(i=0; i<linkItems.length; i++){
            linkItems[i].classList.remove("activeLink");
            linkItems[i].style.color="#b5b4b4";
            e.target.classList.add("activeLink");
            e.target.style.color="white";
        }
    
    })

    link.addEventListener("mouseleave", function(e){

        for(i=0; i<linkItems.length; i++){
            linkItems[i].classList.remove("activeLink");
            linkItems[i].style.color="";
            e.target.classList.remove("activeLink");
            e.target.style.color="";
        }
    
    })

})
