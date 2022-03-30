// Variables
firstRun = true;

// This function adds two numbers
function add(num1, num2){
    return num1 + num2;
};


// This function adds a listener to the buttons
function addListenerToButtons(){
    // Variables
    let buttons = document.querySelectorAll("button");
    let arr = Array.from(buttons);
    let display = document.querySelector("#display-text");

    // Loop through the buttons and add a listener to each one
    for(let button of arr){
        let val = parseInt(button.value);

        // If the button is not a number
        if(isNaN(val)){
            continue;
        }

        // If the button is a number
        else{
            button.addEventListener('click', () => {
                // Detect if this is the first button being entered and change firstRun to false
                if(firstRun){
                    display.value = button.textContent;
                    firstRun = false;
                }

                // If this is not the first button being entered append the number to the display
                else{
                    display.value = display.value + button.textContent;
                }
            });
        }       
    };
}


// This function divides two numbers
function divide(num1, num2){
    return num1 / num2;
};

// This function multiplies two numbers
function multiply(num1, num2){
    return num1 * num2;
};

// This function takes an operator and two numbers then calls a function based on the operator symbol
function operate(operator, num1, num2){
    let answer = 0;
    switch(operator){
        case "+":
            answer = add(num1, num2);
            break;
        
        case "-":
            answer = subtract(num1, num2);
            break;
        
        case "/":
            answer = divide(num1, num2);
            break;
        
        case "*":
            answer = multiply(num1, num2);
            break;
    }
    return answer;
}

// This function subtracts two numbers
function subtract(num1, num2){
    return num1 - num2;
};

// This function calls the main functions to setup the calculator
function mainCall(){
    addListenerToButtons();
}

mainCall();