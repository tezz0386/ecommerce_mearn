const ErrorHandler = require('../../vendor/Error/ErrorHandller');




module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    
    if(process.env.NODE_ENV === 'DEVELOPMENT'){
        res.status(err.statusCode).json({
            success:false,
            error: err,
            errorMessages:err.message,
            stack:err.stack
        })
    }

    if(process.env.NODE_ENV === 'PRODUCTION'){
        let error = {...err}
        error.message = err.message || 'Internal Server Error';
        res.status(error.statusCode).json({
            success: false,
            error: error.message
        });
    }
}