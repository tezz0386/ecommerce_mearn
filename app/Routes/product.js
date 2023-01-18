const express = require('express');
const router = express.Router();

const { indexProduct, storeProduct } = require('../HTTP/Controllers/ProductController');

router.route('/products').get(indexProduct);
router.route('/products').post(storeProduct);

module.exports = router;