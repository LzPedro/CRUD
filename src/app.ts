const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req:any, res:any) => {
  res.send('Hello There!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


console.log("Hello There!")