import mongoose from "mongoose";

const  contactschema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
},{
        timestamps:true
    }

)

const Contact = mongoose.models.contact || mongoose.model('Contact',contactschema)

export default Contact