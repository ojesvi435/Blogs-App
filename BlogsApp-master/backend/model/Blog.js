import mongoose from "mongoose";
const Schema=mongoose.Schema;
const blogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        //reference to user-collection in the database for connecting blog and user
        ref:"User",   
        required:true
    },
})

export default mongoose.model("Blog",blogSchema);
//exporting blog-model defined on blogSchema : Collection name is: blogs