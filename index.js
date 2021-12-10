const { output } = require('./functions/console/output'); 
const { sum } = require('./functions/Global/sum'); 
const { generate } = require('./functions/Global/generate') 
const { getImage } = require('./functions/Global/getImage')
const { date } = require('./functions/Global/date')
const { createFile } = require('./Commands/createFile')

module.exports = { output, sum, generate, getImage, date, createFile}