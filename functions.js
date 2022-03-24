function calc(num1, num2, sign) {
    switch (sign) {
        case '+':
            console.log('addieren: ' + (num1 + num2));
            break;
        case '-':
            console.log('subtrahieren: ' + (num1 - num2));
            break;
        case '/':
            console.log('dividieren: ' + (num1 / num2));
            break;
        case '*':
            console.log('multiplizieren: ' + (num1 * num2));
            break;
        default:
            break;
    }
}
module.exports = {
    calc
}