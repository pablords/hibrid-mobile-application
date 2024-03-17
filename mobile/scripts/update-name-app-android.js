const path = require("path")
const fs = require('fs');
require("dotenv/config")
const { name } = require("../../package.json")

function updatedNameApp() {
   const data = `<resources><string name="app_name">${name}</string></resources>`
   updateScheme(data)
}

function updateScheme(newXml) {
    fs.writeFile(path.resolve(`${process.cwd()}/mobile/android/app/src/main/res/values/strings.xml`), newXml, (err) => {
        if (err) throw new Error("Failed writeToFile")
    })
    console.log("Success updated file")
}


function build() {
    updatedNameApp()
}

build()