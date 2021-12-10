function dateNow() {
    let d; 

    d = new Date(); 

    const VALUE = d.toLocaleString("US-eu")

    return VALUE   
}

function dateTime() {
    let d; 

    d = new Date(); 

    const VALUE = d.toLocaleTimeString()

    return VALUE
}

function dateYear() {
    let d; 

    d = new Date(); 

    const VALUE = d.getFullYear()

    return VALUE
}

function dateToday() {
    let d; 

    d = new Date(); 

    const VALUE = d.toUTCString()

    return VALUE
}

const date = {
    now: dateNow, 
    time: dateTime, 
    year: dateYear, 
    today: dateToday
}

module.exports = { date }