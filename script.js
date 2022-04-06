// Variables
let currentNum = '';
let firstNum = true;
let lastNum = '';
let lastPressed = '';
let lastOperator = ';'
let odd = true;
let operator = '';
let listOfOperators = ['+', '-', '/', '*'];

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
                    if(currentNum == ''){
                        return;
                    }
                    let answer = operate(operator, parseInt(currentNum), parseInt(display.value));
                    display.value = answer;
                    currentNum = '';
                    firstNum = true;
                });
            }

            // Operator buttons
            // TODO fix logic errors in pressing an operator without pressing equal
            // 23 - 3 = 20 pressing equal again will be wrong answer
            else{
                button.addEventListener('click', () => {
                    operator = button.value;
                    // If the last pressed was an operator
                    if(listOfOperators.includes(lastPressed)){
                        operator = button.value;
                        firstNum = true;
                    }

                    // If the first number has been entered
                    if(firstNum == false && currentNum != ''){
                        if(odd == false){
                            lastNum = display.value;
                            let answer = operate(lastOperator, parseInt(currentNum), parseInt(display.value)).toString();
                            currentNum = display.value;
                            display.value = answer;
                            currentNum = answer;
                            firstNum = true;
                            lastPressed = button.value;
                            odd = true;
                            lastOperator = operator;
                        }
                        else{
                            lastNum = display.value;
                            let answer = operate(lastOperator, parseInt(currentNum), parseInt(lastNum)).toString();
                            display.value = answer;
                            lastNum = display.value;
                            currentNum = answer;
                            firstNum = true;
                            lastPressed = button.value;
                            odd = false;
                            lastOperator = operator;
                        }
                        
                    }

                    // If the first number has not been entered
                    else{
                        currentNum = display.value;
                        firstNum = true;
                        lastOperator = button.value;
                        lastPressed = button.value;
                    }                    
                });
            }

            continue;
        }

        // If the button is a number
        else{
            button.addEventListener('click', () => {
                // Detect if this is the first number being entered and change firstNum to false
                if(firstNum == true){
                    display.value = button.textContent;
                    firstNum = false;
                    lastPressed = button.value;
                }

                // If this is not the first button being entered append the number to the display
                else{
                    display.value = display.value + button.textContent;
                    lastPressed = button.value;
                    firstNum = false;
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
    currentNum = ''; // Reset the currentNum variable
    display.value = '0';
    firstNum = true; // Reset the firstNum variable
    lastNum = ''; // Reset the lastNum variable
    lastPressed = ''; // Reset the lastPressed variable
    operator = ''; // Reset the operator variable
   
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