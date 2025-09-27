import G from '../models/gModel.js'

const crGi = async(req, res)=>{
    
    const {id} = req.params

    try{
        const gid = await G.findById(id)
        return res.status(200).json(gid)

    }catch(err){
        return res.status(500).json({
            message:"not available",
            error:err.message
        })
    }
    

}

export default crGi