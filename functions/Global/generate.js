const { output } = require('../console/output'); 

const generateRanInt = function(a, b) {
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
    const value = Math.floor(Math.random() * b + a)
    return value
}

const generate = {
    ranInt: generateRanInt
}

module.exports = { generate }