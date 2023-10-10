import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:Number,
    password:{
        type:String,
        require:true
    },
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"carts"
    },
    role:{
        type:String,
        required:true,
        enum:["user", "admin"],
        default:"user"
    }
});

export const usersModel = mongoose.model(userCollection, userSchema);

