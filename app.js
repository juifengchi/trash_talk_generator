// include package and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const generateTrashTalk = require('./generate_trash_talk')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/who', (req, res) => {
  const option = req.query
  const trashTalk = generateTrashTalk(option)
  res.render('index', { trashTalk, option })
})

// start express server and listen for connection
app.listen(port, () => {
  console.log(`Express app is listening on http://localhost:${port}.`)
})
