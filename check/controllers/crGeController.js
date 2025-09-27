import G from "../models/gModel.js"
const crGe = async (req, res, next)=>{
    try{
        const p = await G.find()
        return res.status(200).json(p)

    }catch(err){
        return res.status(500).json({
            message:"blogs not updated",
            error:err.message
        })

    }

}

export default crGe