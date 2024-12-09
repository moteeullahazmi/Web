import mongoose, {model, Schema} from "mongoose"
import 'dotenv/config'


mongoose.connect(process.env.MONGO_URL as string)
console.log("Mongo Server Connected");

// UserSchema
const UserSchema = new Schema({
    username: {type:String, unique:true},
    password: {type:String}
})
export const UserModel = model("User" ,UserSchema)

// Content Schema
const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref:'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref:"User", required:true },
    
})
export const ContentModel = model("Content", ContentSchema)

