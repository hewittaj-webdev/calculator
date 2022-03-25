

// This function adds two numbers
function add(num1, num2){
    return num1 + num2;
};

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
