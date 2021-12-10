const color = require('colors')

function outputLog(input) {
    let d; 

    d = new Date(); 

    console.log(`${d.toLocaleString("US-eu")}: ${input}`.green)
}

function outputWarn(input) {
    let d; 

    d = new Date(); 

    console.log(`${d.toLocaleString("US-eu")}: ${input}`.yellow)
}

function outputDateNow() {
    let d; 

    d = new Date(); 

    console.log(`Local Time: ${d.toLocaleString("US-eu")}`.cyan)
}


function outputError(input) {
    let d; 

    d = new Date(); 

    console.log(`${d.toLocaleString("US-eu")}: ${input}`.red)
}

const output = {
    log: outputLog, 
    warn: outputWarn,
    error: outputError,  
    dateNow: outputDateNow
}

module.exports = { output } 