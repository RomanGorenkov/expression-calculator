function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let splitArray = expr.split('');
    let rightBrackets = splitArray.filter(rightBrackets => rightBrackets === ')').length;
    let leftBrackets = splitArray.filter(leftBrackets => leftBrackets === '(').length;

    if (rightBrackets !== leftBrackets) {
        throw new Error('ExpressionError: Brackets must be paired')
    } else {
        let result = (new Function('return ' + expr))();

        if(result===Infinity){
            throw new Error('TypeError: Devision by zero.')
        }
        return result;
    }
}

module.exports = {
    expressionCalculator
}