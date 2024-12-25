import SchemaTaches from "@/app/schema/schema-tache";
import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const { titre, message } = await request.json();
  const validation = SchemaTaches.safeParse({ titre, message });

  if (!validation.success) {
    NextResponse.json(validation.error.format(), { status: 400 });
  }

  const { id } = await params;
  const numId = parseInt(id);
  const tache = prisma.tache.findUnique({
    where: { id: numId },
  });

  if (!tache) NextResponse.json("Cette Tache n'existe pas ");

  const TacheAjour = await prisma.tache.update({
    where: { id: numId },
    data: { titre, message },
  });

  return NextResponse.json(TacheAjour);
}
