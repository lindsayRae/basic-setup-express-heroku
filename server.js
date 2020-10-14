const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 1234

app.use(cors())



app.get('/', (req, res) => {
  res.json([{ id: 1, title: 'Hello from backend...'},{ id: 1, title: 'Hello again from backend...'},])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})