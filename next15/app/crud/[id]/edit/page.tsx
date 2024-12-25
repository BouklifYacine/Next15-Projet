import React from 'react'
import prisma from '@/prisma/db'
import { notFound } from 'next/navigation'
import Formulaire from '../../-components/Formulaire'
interface Props {
  params: Promise<{ id: string }>;
}

const Nouveau = async ({params} : Props) => {
  const { id } = await params;
  const numId = parseInt(id);

  const tache = await prisma.tache.findUnique({
    where: { id: numId },
  });

  if (!tache) notFound();

  return (
   <Formulaire tache={tache}></Formulaire>
  )
}

export default Nouveau