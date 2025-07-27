let fs = require('fs');

//Readfile
fs.readFile('readfile.js','utf8',(err,data)=>{
    console.log(data)
})

// write file

fs.writeFile('write.js','console.log("done")',(err)=>{
    console.log("Data was Saved")
})