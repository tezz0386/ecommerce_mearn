const Product = require('../../Models/Product')

exports.newProduct=(req, res, next)=>{

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

exports.getProducts = (req, res, next)=>{
    res.status(200).json({
        success:true,
        message:"This is for the product show list"
    });
}