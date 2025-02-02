const express = require('express')
const app = express()
const port = 2101

//route định nghĩa tuyên đường dẫn trang chính
app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})