exports.getProducts = (req, res, next)=>{
    res.status(200).json({
        success:true,
        message:"This is for the product show list"
    });
}