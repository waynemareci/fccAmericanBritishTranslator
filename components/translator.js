const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(inputString, locale) {
        console.log("in translator; inputString: " + inputString + "; locale: " + locale)
        return inputString
    }
}

module.exports = Translator;