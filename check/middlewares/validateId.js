import mongoose from 'mongoose'
const validateId = (paramName ="id")=>(req, res, next)=>{
    const id = req.params[paramName]
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json("this id is not available"
        )
    }next()
    
}

export default validateId

