const { output } = require('../console/output');

const generateRanInt = function (a, b) {
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

const gif = function () {
    const { gif } = require('../resources/Collections/arrays/gifs');

    const VALUE = gif[Math.floor(Math.random() * gif.length)]

    return VALUE
}

const anime_gif = function () {
    const { gif_anime } = require('../resources/Collections/arrays/animeGifs');

    const VALUE = gif_anime[Math.floor(Math.random() * gif_anime.length)]

    return VALUE
}

const Char = function() {
    const { charArray } = require('../resources/Collections/arrays/Char')

    const value = charArray[Math.floor(Math.random() * charArray.length)]

    return value; 
}

const string = function(string_length) {
    var random_string = '';
    const { Character } = require('../resources/Collections/Strings/string')

    for (var i, i = 0; i < string_length; i++) {
        random_string += Character.charAt(Math.floor(Math.random() * Character.length))
    }

    return random_string; 
}

const generate = {
    ranInt: generateRanInt,
    ranGif: gif,
    ranGif_anime: anime_gif,
    ranChar: Char,
    ranString: string
}

module.exports = { generate }