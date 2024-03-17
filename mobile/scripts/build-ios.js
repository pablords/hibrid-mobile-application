const xmldoc = require('xmldoc');
const path = require("path")
const fs = require('fs');
require("dotenv/config")


function readScheme() {
    fs.readFile(path.resolve(`${process.cwd()}/mobile/ios/ios.xcodeproj/xcshareddata/xcschemes/ios.xcscheme`), function (err, data) {
        if(err) throw new Error("Failed readToFile")
        const document = new xmldoc.XmlDocument(data)
        const env = document.descendantWithPath("LaunchAction.EnvironmentVariables.EnvironmentVariable")
        const dataUpdate = { key: 'DEV_HOST', value: process.env.DEV_HOST, isEnabled: 'YES' }
        env.attr.value = dataUpdate.value
        updateScheme(document.toString())
    });
}

function updateScheme(newXml) {
    fs.writeFile(path.resolve(`${process.cwd()}/mobile/ios/ios.xcodeproj/xcshareddata/xcschemes/ios.xcscheme`), newXml, (err) => {
        if (err) throw new Error("Failed writeToFile")
    })
    console.log("Success updated file")
}

function build() {
    readScheme()
}

build()