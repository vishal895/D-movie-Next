import Dbconnect from "@/utils/dbconn"
import Contact from "@/models/contact"
import { NextResponse } from "next/server"



export async function POST (req,res){
    try{
        const body = await req.json()
        await Dbconnect()

        await Contact.create(body)
        return NextResponse.json({
            message:"messege sent succesfull"
        },{
            status:200
        })
    }catch(e){
        return NextResponse.json(
            {message:"server error"},
            {status:500}
        )
    }
}