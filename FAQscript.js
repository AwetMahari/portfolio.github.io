
let wrapper=document.querySelectorAll(".wrapper");

wrapper.forEach((Element, index)=>{
    Element.addEventListener("click", function(e){

        for(i=0; i<wrapper.length; i++){
            wrapper[i].classList.remove("show");
        }

        wrapper[index].classList.toggle("show");
    })

}) 