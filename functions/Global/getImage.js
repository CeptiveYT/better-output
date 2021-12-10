const { bgBlack_1, bgBlack_3, bgBlack_2, bgBlue_1, bgBlue_2, bgBlue_3} = require('../resources/Images/images')

const bgB1 = function() {
    const value = bgBlack_1;
    return value
}

const bgB2 = function() {
    const value = bgBlack_2;
    return value
}

const bgB3 = function() {
    const value = bgBlack_3;
    return value
}

const bgBl1 = function() {
    const value = bgBlue_1;
    return value
}

const bgBl2 = function() {
    const value = bgBlue_2;
    return value
}

const bgBl3 = function() {
    const value = bgBlue_3;
    return value
}

const getImage = {
    bgBlack_1: bgB1,
    bgBlack_2: bgB2,
    bgBlack_3: bgB3,
    bgBlue_1: bgBl1,
    bgBlue_2: bgBl2,
    bgBlue_3: bgBl3,
}

module.exports = { getImage }