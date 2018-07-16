const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('views/home'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
