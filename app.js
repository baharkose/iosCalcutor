// classes of elements is called
const currentDisplay = document.querySelector(".current-display");
const totalDisplay = document.querySelector(".total-display");
const container = document.querySelector(".number-container");
const clearButton = document.querySelector(".ac");


container.addEventListener("click", (e) =>{
    console.log("Clicked element:", e.target);
    // debugging...

    // it is listened all elements in number-container(numbers, operators etc.) with e.target 
    if(e.target.classList.contains("number-container")){
        currentDisplay.innerHTML = currentDisplay.innerHTML;
        console.log("entered the number container");
        // does not work, it is clicked other places like space
    }
    else
    {
        if(e.target.classList.contains("rakam")){
            // if it is clicked any number, add number func is worked
            console.log("clicked rakam");
            addNumber(e);
        }
        
    }

});

const addNumber = (e) =>{
    console.log(e);
    if(currentDisplay.innerHTML === "0"){
        currentDisplay.innerHTML = e.target.innerHTML;
        console.log(currentDisplay);
    }
    else{
        currentDisplay.innerHTML += e.target.innerHTML
        console.log(currentDisplay);
    }
}




