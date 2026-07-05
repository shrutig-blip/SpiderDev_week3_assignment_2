let count = 0;

const countDisplay = document.getElementById("count");

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Increase
incrementBtn.addEventListener("click", function(){

    count++;

    countDisplay.textContent = count;

});

// Decrease
decrementBtn.addEventListener("click", function(){

    if(count > 0){

        count--;

        countDisplay.textContent = count;

    }

});

// Reset
resetBtn.addEventListener("click", function(){

    count = 0;

    countDisplay.textContent = count;

});