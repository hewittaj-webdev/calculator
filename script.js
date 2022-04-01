// Variables
let firstRun = true;
let currentNum = '';
let operator = '';
let secondNum = false;

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

        // If the button is not a number add their specific listeners
        if(isNaN(val)){
            if(button.value == 'C'){
                button.addEventListener('click', clearDisplay());
            }
            
            // Backspace button
            else if(button.value == String.fromCharCode(8592)){
                button.addEventListener('click', (clearDisplay())); // TODO change from clear display to delete one character
            }

            // Equal button
            else if(button.value == '='){
                button.addEventListener('click', () => {
                    let answer = operate(operator, parseInt(currentNum), parseInt(display.value));
                    display.value = answer;
                });
            }

            // Operator buttons
            // TODO fix logic errors in pressing an operator without pressing equal
            // 23 - 3 = 20 pressing equal again will be wrong answer
            else{
                button.addEventListener('click', () => {
                    // If the second number has been entered
                    if(secondNum){
                        let answer = operate(operator, parseInt(currentNum), parseInt(display.value));
                        display.value = answer;
                        currentNum = answer;
                        secondNum = false;
                        firstRun = true;
                    }

                    // If the first number has not been entered
                    else{
                        currentNum = display.value;
                        secondNum = true;
                        firstRun = true;
                        operator = button.value;
                    }                    
                });
            }

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
// TODO
// This function deletes one number from the screen
function backspace(){

}

// This function clears the display
function clearDisplay(){
    let display = document.querySelector('#display-text');
    display.value = '0';
    firstRun = true; // Reset the firstRun variable
    currentNum = 0; // Reset the currentNum variable
    operator = ''; // Reset the operator variable
    secondNum = false; // Reset the secondNum variable
}
// TODO
// This function handles the decimal
function decimal(){

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
function operate(op, num1, num2){
    let answer = 0;

    switch(op){
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