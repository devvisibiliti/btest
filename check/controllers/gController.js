import G from '../models/gModel.js'


const crBg = async (req, res, next)=>{
    
    try{
        const {title, description} = req.body
        // if(!title || !description){
        //     return res.status(400).json({err:"t and D is need"})
        // }

        const gc = await G.create({title, description})

        return res.status(200).json({
            message:"g is ok",
            data:gc
        })

    }catch(err){
        next(err)
    }
}

export default crBg