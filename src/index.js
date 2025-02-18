const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { engine } = require('express-handlebars');
const app = express()
const port = 2101

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('.hbs', engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//route định nghĩa tuyên đường dẫn trang chính
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})