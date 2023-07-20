const express = require('express');
const app = express()

const port=8000

app.get('/', (req, res) => {
    res.send('Hi')
  })

  app.get('/data', (req, res) => {
   res.send('data will show here...')
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })