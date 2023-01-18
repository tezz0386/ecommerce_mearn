const Product = require('../../Models/Product')




// to store product in database /api/v1/products
exports.storeProduct=(req, res, next)=>{

    // to create and save
    const product = new Product(req.body);
    product.save();
    
    // or to create and save
    // const product = Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

// to get all products /api/v1/products

exports.indexProduct = async (req, res, next)=>{
    const products = await Product.find({});
    res.status(200).json({
        success:true,
        count:products.length,
        products:products
    });
}