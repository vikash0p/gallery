import Profiles from "@/folders/mongoose/models/gallerySchema";
import mongooseConnection from "@/folders/mongoose/mongooseConnection";
import { NextResponse } from "next/server";



export async function POST(request) { 
    try {
        const { profile, email, photoURL } = await request.json();
        await mongooseConnection();
        await Profiles.create({ profile, email, photoURL });
        return NextResponse.json({
            message: "successfully created !",
            
        }, {
            status:200,
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "error post data !"+", error ",
         
        }, {
            status: 500,
        })
    }

}

export async function GET(request) {
    try {
        await mongooseConnection();
        const profile = await Profiles.find();
        return NextResponse.json({ profile });
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "error get data !",
         
        }, {
            status: 500,
        })
    }
}