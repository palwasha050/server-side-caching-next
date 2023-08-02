const express = require('express')
const cache = require('memory-cache')

// Replace this with the function that fetches data from your data source
const fetchFromDataSource = require('./fetchFromDataSource').default;

const app = express()

app.get('/api/data', (req, res) => {
  let key = "__express__/api/data"
  let cachedBody = cache.get(key)

  if (cachedBody) {
    res.send(cachedBody)
    return
  }

  // Else, fetch data from a data source and store it in cache
  let data = fetchFromDataSource()

  cache.put(key, data)
  res.send(data)
})

export default app
