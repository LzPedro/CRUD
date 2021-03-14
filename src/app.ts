const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
  res.send('Hello There!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


console.log("Hello There!")