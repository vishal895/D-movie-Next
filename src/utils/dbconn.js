import mongoose from "mongoose"

const MongoDB_URL ="mongodb+srv://vishallaki09:k19RjhjxUMI7qDPA@cluster0.i2qsjni.mongodb.net/userData?retryWrites=true&w=majority&appName=Cluster0"

if(!MongoDB_URL){
    throw new Error("please define Mongodb_url")
}

let cached = global.mongoose
if(!cached){
    cached=global.mongoose ={con:null,promise:null}
}

const Dbconnect = async()=>{
    if(cached.con){
        return cached.con
    }
    if(!cached.promise){
        const opts ={
            bufferCommands:false
        }
        cached.promise=mongoose.connect(MongoDB_URL,opts)
        .then((mongoose)=>{
            return mongoose
        })
    }
    try{
        cached.con=await cached.promise
    }
    catch(e){
        cached.promise=null
        throw e
    }
    return cached.con
}

export default Dbconnect