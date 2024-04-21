const input = document.querySelector(".search-area input");
const btn = document.querySelector(".search-area button");

function cheaker(){
    // console.log(input.value);
    switch(input.value) {
        case "Gaming PC":
            window.location.href="./Gaming DeskTop Page/Desktop.html";
            break;

        case "gaming pc":
            window.location.href="./Gaming DeskTop Page/Desktop.html";
            break;

        case "Desktop":
            window.location.href="./Gaming DeskTop Page/Desktop.html";
            break;

        case "PC":
            window.location.href="./Gaming DeskTop Page/Desktop.html";
            break;

        case "pc":
            window.location.href="./Gaming DeskTop Page/Desktop.html";
            break;

        case "Computer":
            window.location.href="./Gaming DeskTop Page/Desktop.html";
            break;

        case "Gaming Laptop":
            window.location.href="./Gaming Laptop Page/Laptop.html";
            break;

        case "gaming laptop":
            window.location.href="./Gaming Laptop Page/Laptop.html";
            break;

        case "laptop":
            window.location.href="./Gaming Laptop Page/Laptop.html";
            break;

        case "Laptop":
            window.location.href="./Gaming Laptop Page/Laptop.html";
            break;

        case "accessories":
            window.location.href="./Assesories Page/Ass.html";
            break;

        case "Accessories":
            window.location.href="../Assesories Page/Ass.html";
            break;

        case "HeadPhone":
            window.location.href="./Assesories Page/Ass.html";
            break;

        case "headphone":
            window.location.href="./Assesories Page/Ass.html";
            break;

        case "Gaming Headphone":
            window.location.href="./Assesories Page/Ass.html";
            break;
        
        case "gaming headphone":
            window.location.href="./Assesories Page/Ass.html";
            break;

        case "Keyboard":
            window.location.href="./Assesories Page/Ass.html";
            break;

        case "keyboard":
            window.location.href="./Assesories Page/Ass.html";
            break;

        case "Mouse":
            window.location.href="./Assesories Page/Ass.html";
            break;

        case "mouse":
            window.location.href="./Assesories Page/Ass.html";
            break;

        case "Laptop Cooler":
            window.location.href="./Assesories Page/Ass.html";
            break;

        case "laptop cooler":
            window.location.href="./Assesories Page/Ass.html";
            break;

        case "Speaker":
            window.location.href="./Assesories Page/Ass.html";
            break;

        case "speaker":
            window.location.href="./Assesories Page/Ass.html";
            break;


        default:
            alert("Invalid Search");
    }
}



btn.addEventListener("click", cheaker);
