import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";
import bcrypt from "bcryptjs"
import SchemaInscription from "@/app/schema/schema-inscription";

export async function POST(request:NextRequest){
    const {name, password } = await request.json()
    const validation =  SchemaInscription.safeParse({name, password})

 if (!validation.success) return NextResponse.json(validation.error.format(), {status : 400})

    const user = await prisma.user.findUnique({
        where : {name}
    })

    if(user) return NextResponse.json({message : "Ce nom existe deja "} , {status : 400})

    const motdepasse = await bcrypt.hash(password, 10)

    const inscription = await prisma.user.create({
        data: {
            name,
            password: motdepasse
        }
    })

    return NextResponse.json(inscription.name)
   

}