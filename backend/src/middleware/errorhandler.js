// not dounded routes
const notFound = (req,res,next)=>{
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

//The errorHandler middleware is a centralized function for processing all errors that occur in your application. This includes:
const errorHandler = (err,req,res,next)=>{
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
// mongoose
    if(err.name === "CastError" && err.kind === "ObjectId"){
        statusCode = 404;
        message = 'Ressource Not Found';
    }
    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

export {notFound, errorHandler}