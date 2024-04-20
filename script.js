const threeDot = document.querySelector(".more");
const navElement = document.querySelector(".nav-element-2");


threeDot.addEventListener("click", () =>{
    if(navElement.style.display === "none"){
        navElement.style.display = "block";
    }else{
        navElement.style.display = "none";
    }
});