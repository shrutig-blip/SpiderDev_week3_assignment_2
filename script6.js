const changeBtn = document.getElementById("changeColor");
const copyBtn = document.getElementById("copyColor");
const hexCode = document.getElementById("hexCode");

// Generate a random HEX color
function generateColor() {

    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Change background color
changeBtn.addEventListener("click", function () {

    const randomColor = generateColor();

    document.body.style.backgroundColor = randomColor;

    hexCode.textContent = randomColor;

});

// Copy HEX code
copyBtn.addEventListener("click", function () {

    navigator.clipboard.writeText(hexCode.textContent);

    alert("Copied: " + hexCode.textContent);

});