import User from "../models/userModels.js"

const Signup =  async(req, res)=>{
    

    try{
        const {name, email, password} = req.body
        if(!name,!email,!password){
            return res.status(400).json({message:"name or email or password is not available"})
        }
        const user = await User.create({name,email,password})
        return res.status(200).json({message:"userCreated"})




    }catch(err){
        return res.status(400).json({message:"Error"})

    }


}

export default Signup