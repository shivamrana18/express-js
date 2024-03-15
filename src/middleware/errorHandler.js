const { constants } = require("../constant");

const errorHandler = (err,req, res, next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.status(400).json({title: "Validation Error",message : err.message, stack : err.stack})
            break;
        case constants.UNAUTHORIZED:
            res.status(401).json({title: "Unauthorized Error",message : err.message, stack : err.stack})
            break;
        case constants.FORBIDDEN:
            res.status(403).json({title: "Forbidden Error",message : err.message, stack : err.stack})
            break;
        case constants.NOT_FOUND:
            res.status(404).json({title: "Not Found Error",message : err.message, stack : err.stack})
            break;
        case constants.SERVER_ERROR:
            res.status(500).json({title: "Server Error",message : err.message, stack : err.stack})
            break;
        default:
            res.status(200).json({message : "Everything is correct"})
            break;
    }
    next()
}

module.exports = errorHandler;