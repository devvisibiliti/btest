import Mongoose from "mongoose"


const bgSchema = new Mongoose.Schema(
    {
        
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true

        }
    }
)

const G = Mongoose.model('G',bgSchema)

export default G