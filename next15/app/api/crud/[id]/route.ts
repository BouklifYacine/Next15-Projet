import { PatchSchemaTache } from "@/app/schema/schema-tache";
import { auth } from "@/auth";
import prisma from "@/prisma/db";

import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, { params }: Props) {

const session = await auth()
if (!session) return NextResponse.json({error : "Vous n'etes pas connecté "}, {status : 400})

  const { titre, message, assignerauserid } = await request.json();
  const validation = PatchSchemaTache.safeParse({ titre, message });

  if (assignerauserid) {
    const user = await prisma.user.findUnique({
      where: { id: assignerauserid, }, });
       if (!user)
      return NextResponse.json({ error: " Id Invalide" }, { status: 400 });
  }

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const { id } = await params;
  const numId = parseInt(id);
  const tache = await prisma.tache.findUnique({
    where: { id: numId },
  });

  if (!tache) return NextResponse.json("Cette Tache n'existe pas ", {status: 400});

  const TacheAjour = await prisma.tache.update({
    where: { id: numId },
    data: { titre, message, assignerauserid },
  });

  return NextResponse.json(TacheAjour);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  
  const { id } = await params;
  const numId = parseInt(id);
  const tache = await prisma.tache.findUnique({
    where: { id: numId },
  });

  if (!tache)
    return NextResponse.json(
      { message: " Cette tache n'existe pas " },
      { status: 400 }
    );

  const tachesupprimer = await prisma.tache.delete({
    where: { id: numId },
  });

  return NextResponse.json(tachesupprimer);
}
