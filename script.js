
let darkButton = document.getElementById("bnt1");
let lightButton = document.getElementById("bnt2");

darkButton.addEventListener("click", function() {
    document.body.classList.add("dark-theme");
    darkButton.style.backgroundColor = "white";
    darkButton.style.color = "black";
    lightButton.style.backgroundColor = "black";
    lightButton.style.color = "white";
});

lightButton.addEventListener("click", function() {
    document.body.classList.remove("dark-theme");
    darkButton.style.backgroundColor = "black";
    darkButton.style.color = "white";
    lightButton.style.backgroundColor = "white";
    lightButton.style.color = "black";
});
