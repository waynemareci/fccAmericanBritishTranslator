const americanOnly = require('./american-only.js')
const americanToBritishSpelling = require('./american-to-british-spelling.js')
const americanToBritishTitles = require('./american-to-british-titles.js')
const britishOnly = require('./british-only.js')

class Translator {
  translate (inputString, locale) {
    // console.log(
    //   'in translator; inputString: ' + inputString + '; locale: ' + locale
    // )
    const words = inputString.split(' ')
    var outputString = ''
    words.forEach(word => {
      console.log('in forEach; processing ' + word)
      if (/^(0?[1-9]|1[0-2]):[0-5][0-9]$/.test(word)) {
        outputString += `<span class="highlight">${word.replace(':', '.')}</span>` + ' '
      } else if (
        '.' === word.charAt(word.length - 1) &&
        americanToBritishTitles.hasOwnProperty(word.toLowerCase())
      ) {
        console.log(word + ' found in titles table')
        outputString += `<span class="highlight">${word.slice(0, -1)}</span>` + ' '
      } else if (americanToBritishSpelling.hasOwnProperty(word)) {
        //console.log(word + ' found in table')
        outputString += `<span class="highlight">${americanToBritishSpelling[word]}</span> `
      } else outputString += word + ' '
      //console.log('building outputString: ' + outputString)
    })
    console.log('returning ' + outputString + ' from translate function')
    return outputString.trim()
  }
}

module.exports = Translator
