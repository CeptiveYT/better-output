const { output } = require('../console/output')

const sumAdd = function(a, b) {
    if (!a, !b) {
        output.error("The following value is not difined: value1, value2") + console.log("Example: output.log(add(int, int))".magenta); 
        return
    }

    if (!a) {
        output.error("The following value is not difined: value1") + console.log("Example: output.log(add(int, int))".magenta);
        return
    }

    if (!b) {
        output.error("The following value is not difined: value2") + console.log("Example: output.log(add(int, int))".magenta); 
        return
    }
    
    return a + b;
}

const sumSubtract = function(a, b) {
    if (!a, !b) {
        output.error("The following value is not difined: value1, value2") + console.log("Example: output.log(add(int, int))".magenta); 
        return
    }

    if (!a) {
        output.error("The following value is not difined: value1") + console.log("Example: output.log(add(int, int))".magenta);
        return
    }

    if (!b) {
        output.error("The following value is not difined: value2") + console.log("Example: output.log(add(int, int))".magenta); 
        return
    }
    
    return a - b;
}

const sumDivide = function(a, b) {
    if (!a, !b) {
        output.error("The following value is not difined: value1, value2") + console.log("Example: output.log(add(int, int))".magenta); 
        return
    }

    if (!a) {
        output.error("The following value is not difined: value1") + console.log("Example: output.log(add(int, int))".magenta);
        return
    }

    if (!b) {
        output.error("The following value is not difined: value2") + console.log("Example: output.log(add(int, int))".magenta); 
        return
    }
    
    return a / b;
}

const sumMultiply = function(a, b) {
    if (!a, !b) {
        output.error("The following value is not difined: value1, value2") + console.log("Example: output.log(add(int, int))".magenta); 
        return
    }

    if (!a) {
        output.error("The following value is not difined: value1") + console.log("Example: output.log(add(int, int))".magenta);
        return
    }

    if (!b) {
        output.error("The following value is not difined: value2") + console.log("Example: output.log(add(int, int))".magenta); 
        return
    }
    
    return a * b;
}

const sum = {
    add: sumAdd, 
    subtract: sumSubtract, 
    divide: sumDivide, 
    multiply: sumMultiply
}

module.exports = { sum }