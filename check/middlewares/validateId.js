import mongoose from 'mongoose'
const validateId = (req, res, next)=>{
    const id = req.params.id
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json("this id is not available"
        )
    }next()
    
}

export default validateId

