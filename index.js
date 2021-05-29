var button = document.getElementById("menu");
var mobilenav = document.getElementById("mobileNav");

mobilenav.style.display = "none";
button.style.opacity = 1;

button.onclick = function(){
    if(mobilenav.style.display == "none"){
        mobilenav.style.display = "block";
        button.style.opacity = 0.5;
    }
    else{
        mobilenav.style.display = "none";
        button.style.opacity = 1;
    }
}