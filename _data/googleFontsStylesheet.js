const fetch = require('node-fetch')

const url = 'https://fonts.googleapis.com/css2?family=Krona+One&family=Poppins:wght@400;500&display=swap'

module.exports = fetch(url).then(res => res.text())