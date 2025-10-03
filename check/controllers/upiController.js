import G from '../models/gModel.js'


const upi = async (req, res)=>{
    const {id} = req.params
    const updates = req.body

    try{
        const added = await G.findByIdAndUpdate(id, {$set:updates}, {new:true, runValidators:true})
        if(!added) return res.status(400).json({message:"some error"})
        return res.status(200).json({message:"updated"})

    }catch(err){
        return res.json({message:"catcherror"})

    }

}

export default upi