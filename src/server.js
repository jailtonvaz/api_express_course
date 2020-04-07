const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')


app.use(bodyParser.urlencoded({ extended: true }))  // em todas as requisições, haverá um 'parser' dos valores passados via 'urlencoded'

app.get('/products', (req, res, next) => {
    // res.send({ name: 'Laptop Dell XPS 13 (2020)', price: 2499.90 }) // convertido automaticamente para o formato JSON
    res.send(database.getProducts())
})

app.get('/products/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id))    // 'req.params' retorna os parâmetros contidos na URL (get)
})

app.post('/products', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) 
})

app.put('/products/:id', (req, res, next) => {
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.delete('/products/:id', (req, res, next) => {
    const product = database.deleteProduct(req.params.id)
    res.send(product)
})

app.listen(port, () => {
    console.log(`The server is executing on port ${port}.`)
})