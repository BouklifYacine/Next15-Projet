import {SchemaTaches} from "@/app/schema/schema-tache";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

export async function POST(request: NextRequest){
    const {titre, message } = await request.json()
   const validation =  SchemaTaches.safeParse({titre, message})

   if (!validation.success) {
    NextResponse.json(validation.error.format(), {status : 400})
   }
   const nouvelletache =  await prisma.tache.create({
    data : {titre, message}
   })

   return NextResponse.json(nouvelletache)


}