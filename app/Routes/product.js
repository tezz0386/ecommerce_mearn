const express = require('express');
const router = express.Router();

const { getProducts, newProduct } = require('../HTTP/Controllers/ProductController');

router.route('/products').get(getProducts);
router.route('/products').post(newProduct);

module.exports = router;