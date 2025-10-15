import User from "../models/userModels.js"
import jwt from "jsonwebtoken"

const Lo = async (req, res)=>{
    try{
        const {email, password} = req.body
    if(!email || !password){
        return res.status(400).JSON({message:"email or password is not there"})
    }
    const log = await User.findOne({email:email.toLowercase().trim()}).select("+password")
    if(!log){
        return res.status(401).JSON({message:"user not there"})
    }
    const ok = await bcrypt.compare(password, User.log )
    if(!ok){
        return res.status(501).JSON({message:"password is wrong"})
    }

    const token = jwt.sign({
        sub:log._id, username: log.username, email: log.email
    },
    process.env.JWT_SECRET,
    {expiresin:"7d"}
);

return res.status(200).JSON({
    message:"login successfull",
    token,
    log: { id: log._id, username: log.username, email: log.email }
})




    }catch(err){
         console.error("Login error:", err);
    return res.status(500).json({ message: "something went wrong" });

    }
    

}

export default Lo