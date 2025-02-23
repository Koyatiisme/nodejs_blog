const express = require('express') 
const morgan = require('morgan')
const path = require('path')
const { engine } = require('express-handlebars');
const app = express()
const port = 2101

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

const route = require('./routes')

//route init
route(app)

//HTTP logger
//app.use(morgan('combined'))

//Template engine
app.engine('.hbs', engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Action ---> Dispatcher ---> Function handler

//route định nghĩa tuyên đường dẫn trang chính


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})