let counter = document.getElementById("counter");
let error = document.getElementById("error");
let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");
let clear = document.getElementById("clear");


let count = 1;
// Increment Logic
increment.addEventListener('click', ()=> {
    counter.textContent = ++count;
    if(count>0){
        error.style.display = "none";
        decrement.classList.remove("disabled");
        clear.style.display = "inline-block";
    }
})

// Decrement Logic
decrement.addEventListener('click', ()=> {
    
    counter.textContent = --count;
    if(count===0){
        error.style.display = "block";
        decrement.classList.add("disabled");
        clear.style.display = "none";
    }
})

// Clear Button Logic
clear.addEventListener('click', ()=> {
    counter.textContent = 0;
    clear.style.display = "none";
    decrement.classList.add("disabled");
    error.style.display = "block";
})