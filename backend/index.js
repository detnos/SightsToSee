const express = require('express')
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express()

let allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
};
app.use(allowCrossDomain);

const port = 3001
const db = require('./queries')

app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API -- test' })
})

//all locations
app.get('/locations', (request, response) => {
    db.returnAll(request, response, 'locations')
})

//location by id
app.get('/location/:id', (request, response) => {
    db.readRow(request, response, 'locations')
})

//all sights
app.get('/sights', (request, response) => {
    db.returnAll(request, response, 'sights')
})

//sight by id
app.get('/sight/:id', (request, response) => {
    db.readRow(request, response, 'sights')
})

//all routes
app.get('/routes', (request, response) => {
    db.returnAll(request, response, 'routes')
})

//route by id
app.get('/route/:id', (request, response) => {
    db.readRow(request, response, 'routes')
})

//sights per route
app.get('/sights_on_route/:id', (request, response) => {
    db.sightsPerRoute(request, response, 'sights')
})

app.listen(port, () => {
    console.log(`app running on port ${port}.`)
})