import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String, required:true,trim:true, minlength:2, maxlength:15
        },
        email:{
            type:String, required:true
        },
        password:{
            type:String,required:true
        }
        
           
        
    },
    {
         timestamps:true
    }
)

userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 12)
})

export default mongoose.model("User", userSchema)