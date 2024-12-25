import SchemaTaches from "@/app/schema/schema-tache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const {titre, message } = await request.json()
   const validation =  SchemaTaches.safeParse({titre, message})

   if (!validation.success) {
    NextResponse.json({ Message : " Vous devez respecter les règles khey "})
   }

}