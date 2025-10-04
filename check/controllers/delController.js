import mongoose from 'mongoose'
import G from "../models/gModel.js"


const del = async (req, res)=>{
    const {id} = req.params

    try{
        const remove = await G.findByIdAndDelete(id)
        if(remove){
            return res.status(200).json({message:"successfully deleted"})

        }
    

    }catch(err){
        return res.status(500).json({message:"Failed"})

    }

}

export default del