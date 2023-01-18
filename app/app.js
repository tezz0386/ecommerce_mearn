const express = require('express');
const app = express();

app.use(express.json());

// import All Routes
const products = require('./routes/product');
const errorMiddleware = require('./Middleware/error');



app.use('/api/v1', products);

// using error middleware
app.use(errorMiddleware);

module.exports = app;
