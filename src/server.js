const port = 3003

const express = require('express')
const app = express()


app.get('/products', (req, res, next) => {
    res.send({ name: 'Laptop Dell XPS 13 (2020)', price: 2499.90 }) // convertido automaticamente para o formato JSON
})

app.listen(port, () => {
    console.log('The server is executing on port 3003.')
})