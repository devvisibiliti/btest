import User from "../models/userModels.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const Lo = async (req, res)=>{
    try{
        const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({message:"email or password is not there"})
    }
    const log = await User.findOne({email:email.toLowerCase().trim()}).select("+password")
    if(!log){
        return res.status(401).json({message:"user not there"})
    }
    const ok = await bcrypt.compare(password, log.password )
    if(!ok){
        return res.status(501).json({message:"password is wrong"})
    }
    const token = jwt.sign({
        sub:log._id, username: log.username, email: log.email
    },
    process.env.JWT_SECRET,
    {expiresIn:"7d"}
);

res.cookie("auth", token, {
    httpOnly:true,
    secure:process.env.NODE_ENV ==="production",
    sameSite:process.env.NODE_ENV === "production"?"none":"lax",
    maxAge:7*24*60*60*1000,
    path:'/'

})

return res.status(200).json({
    message:"login successfull",
    log: { id: log._id, username: log.username, email: log.email }
})




    }catch(err){
         console.error("Login error:", err);
    return res.status(500).json({ message: "something went wrong" });

    }
    

}

export default Lo