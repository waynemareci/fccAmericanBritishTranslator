'use strict'

const Translator = require('../components/translator.js')

module.exports = function (app) {
  const translator = new Translator()

  app.route('/api/translate').post((req, res) => {
    console.log(
      'in /api/translate post; text: ' +
        req.body.text +
        '; locale: ' +
        req.body.locale
    )
    const { text: inputText, locale } = req.body
    if (inputText == undefined || locale == undefined) {
      console.log('Required field missing')
      res.json({ error: 'Required field(s) missing' })
      return
    }
    if (inputText === '') {
      console.log('empty text')
      res.json({ error: 'No text to translate' })
      return
    }
    if (locale !== 'british-to-american' && locale !== 'american-to-british') {
      console.log('invalid locale')
      res.json({ error: 'Invalid value for locale field' })
      return
    }
    const returnString = translator.translate(req.body.text, req.body.locale)
    if (returnString === inputText) {
      console.log('input and output match')
      res.json({ text: inputText, translation: 'Everything looks good to me!' })
      return
    }
    console.log(
      'top level, ready to send: sending text:\n' +
        inputText +
        '\nand translation:\n' +
        returnString
    )
    res.json({ text: inputText, translation: returnString })
  })
}
