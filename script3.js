const themeBtn=document.getElementById("themebtn");
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-theme");
    themeBtn.textContent = "Light Mode";
}

// Toggle Theme

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){

        themeBtn.textContent = "Light Mode";

        localStorage.setItem("theme","dark");

    }

    else{

        themeBtn.textContent = "Dark Mode";

        localStorage.setItem("theme","light");

    }

});
