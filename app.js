// classes of elements is called
const currentDisplay = document.querySelector(".current-display");
const totalDisplay = document.querySelector(".total-display");
const container = document.querySelector(".number-container");
const clearButton = document.querySelector(".ac");


let operator = ""; // added operator variable due to calc operation
let result = "";  // added result variable due to calc operation
let firstValue = ""; // added firstValue variable due to calc operation
let secondValue = ""; // added secondValue variable due to calc operation
let tempTotal = ""; // added temporaryTotal variable due to calc operation
let counter = 0; // created to prevent overflow


container.addEventListener("click", (e) =>{
    console.log("Clicked element:", e.target);
    // debugging...

    // it is listened all elements in number-container(numbers, operators etc.) with e.target 
    if(e.target.classList.contains("number-container")){
        currentDisplay.innerHTML = currentDisplay.innerHTML;
        console.log("entered the number container");
        // does not work, it is clicked other places like space
    }

    // listened other classes
    else
    {
        if(e.target.classList.contains("rakam")){
            // if it is clicked any number, add number func is worked
            console.log("clicked rakam");
            addNumber(e);
        }
        else if(e.target.innerHTML === "AC"){
            allClear();
        }

        else if(e.target.classList.contains("minus-plus")){
            currentDisplay.innerHTML = -1 * Number(currentDisplay.innerHTML)
        }
        else if (e.target.classList.contains("percent")){
            percentFunc();
        }
        else if (e.target.classList.contains("point")) {
            pointerFunc(e);
        } 
        else if (e.target.classList.contains("operator")){
            console.log("clicked", e.target);
            operatorFunc(e);
        }
        else if (e.target.classList.contains("equal")) {
            equalFunc();
        }
        else if(e.target.innerHTML === "C"){
            clear();
        }

        
    }

});


//ADD NUMBER FUNCTION

const addNumber = (e) =>{
    console.log(e);
    if(currentDisplay.innerHTML === "0"){
        // if current display is 0 added e.target.innerHTML
        currentDisplay.innerHTML = e.target.innerHTML;
        console.log(currentDisplay);
        clearButton.innerHTML = "C"
    }
    else{
        if(counter > 8){
            currentDisplay.innerHTML = currentDisplay.innerHTML;
        }
        else{
        // if there is a number, add next to other number 
        currentDisplay.innerHTML += e.target.innerHTML
        counter++;
    }
    }
}



// CLEARING OPERATIONS

const allClear = () =>{
    currentDisplay.innerHTML = "0";
    totalDisplay.innerHTML = "";
    firstValue = "";
    counter = 0;
}

const clear = () =>{
    currentDisplay.innerHTML = "0";
    counter = 0;
    clearButton.innerHTML = "AC";
}



const operatorFunc = (e) =>{

    //makes displaying and calculating steps
    operator = e.target.innerHTML;
    displayFunc(e);
    counter = 0;

    if(!secondValue) return;
    equalFunc();
    totalDisplay.innerHTML =  tempTotal + operator;

    
}

const displayFunc = (e) =>{

    // it provides displaying numbers in current and total display    
    if(currentDisplay.innerHTML === "0" && totalDisplay.innerHTML){
        // first value adds as second item
        totalDisplay.innerHTML = firstValue + operator;
    }
    else if(currentDisplay.innerHTML === "0" && !firstValue){
        totalDisplay.innerHTML = ""; // for new calculating operation
    }
    else{
        if(firstValue){
            secondValue = Number(currentDisplay.innerHTML)
        }
        else{
            firstValue = Number(currentDisplay.innerHTML);
            totalDisplay.innerHTML = firstValue + operator;
            currentDisplay.innerHTML = "0";
        }
    }
};


const equalFunc = () => {
    if(!firstValue) return;
    displayFunc();
    switch (operator) {
            case "+":
                result = Number(firstValue) + Number(secondValue);
                break;
            case "-":
                result = Number(firstValue) - Number(secondValue);
                break;
            case "/":
                result = Number(firstValue) / Number(secondValue);
                break;
            case "*":
                result = Number(firstValue) * Number(secondValue);
                break;
        
            default:
                break;
        }

        firstValue = tempTotal;
        totalDisplay.innerHTML = firstValue;
        currentDisplay.innerHTML = "0";
        secondValue = "";

}    

const percentFunc = () => {
    if(currentDisplay.innerHTML === "0.000"){
        currentDisplay.innerHTML = "0";
    }
    else{
        if(Number(currentDisplay.innerHTML)%100){
            currentDisplay.innerHTML = (Number(currentDisplay.innerHTML) /100).toFixed(3);
        }
        else{
            currentDisplay.innerHTML = Number(currentDisplay.innerHTML)/100
        }
    }
}

