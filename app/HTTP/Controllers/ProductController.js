const Product = require('../../Models/Product')
const ErrorHandler = require('../../../vendor/Error/ErrorHandller');
const CatchAsyncError = require('../../Middleware/CatchAsyncError');


// to store product in database /api/v1/products
exports.storeProduct= CatchAsyncError(async (req, res, next)=>{

    // to create and save
    // const product = new Product(req.body);
    // product.save();
    
    // or to create and save
    const product = await Product.create(req.body);
    
    res.status(201).json({
        success:true,
        product
    })
})

// to get all products /api/v1/products

exports.indexProduct = CatchAsyncError(async (req, res, next)=>{
    const products = await Product.find({});
    res.status(200).json({
        success:true,
        count:products.length,
        products:products
    });
})


// to get single products /api/v1/products/:id

exports.showProduct = CatchAsyncError(async (req, res, next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }
    res.status(200).json({
        success:true,
        product
    });
})

// to update products /api/v1/products/:id
exports.updateProduct = CatchAsyncError(async (req, res, next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        if(!product){
            return next(new ErrorHandler("Product Not Found", 404));
        }
    }
    product.update(req.body);
    res.status(200).json({
        success:true,
        product
    })
})

exports.deleteProduct = CatchAsyncError(async (req, res, next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        if(!product){
            return next(new ErrorHandler("Product Not Found", 404));
        }
    }
    product.remove();
    res.status(200).json({
        success:true,
        message:'product deleted'
    });
})