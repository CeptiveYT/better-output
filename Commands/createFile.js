const fs = require('fs')

function createFile(){

    const filename = process.argv[2]; 
    fs.writeFileSync(`${process.cwd()}/${filename}`, `// ${filename} was created using createFile Function.`)
    console.log(`Successfully created ${filename} in ${process.argv[1]}`)
}

exports.createPublic = createFile;