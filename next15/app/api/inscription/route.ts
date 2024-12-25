import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

import bcrypt from "bcryptjs"
import SchemaInscription from "@/app/schema/schema-inscription";

export async function POST(request:NextRequest){
    const {email, password } = await request.json()
    const validation =  SchemaInscription.safeParse({email, password})

 if (!validation.success) return NextResponse.json(validation.error.format(), {status : 400})

    const user = await prisma.user.findUnique({
        where : {email}
    })

    if(user) return NextResponse.json({message : "Cet Email existe deja "})

    const motdepasse = await bcrypt.hash(password, 10)

    const inscription = await prisma.user.create({
        data: {
            email,
            password: motdepasse
        }
    })

    return NextResponse.json(inscription.email)
   

}