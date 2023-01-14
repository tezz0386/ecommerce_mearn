const express = require('express');
const app = express();

app.use(express.json());

// import All Routes
const products = require('./routes/product');
app.use('/app/v1', products);

module.exports = app;
