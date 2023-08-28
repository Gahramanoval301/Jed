function calculator(num1, num2, operator) {

    switch (operator) {
        case '+':
            console.log(num1 + num2)
            break;
        case '-':
            console.log(num1 - num2)
            break;
        case '*':
            console.log(num1 * num2)
            break;
        case '/':
            console.log(num1 / num2)
            break;

        default:
            console.log("Wrong Input")
            break;
    }
}

calculator(1, 4, '+')
calculator(2, 5, '-')