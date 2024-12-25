import prisma from '@/prisma/db'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: Promise<{ id: string }>
}

const CrudId = async ({ params }: Props) => {
    const { id } = await params;
    const numId = parseInt(id);

    if (isNaN(numId)) notFound();

    const tache = await prisma.tache.findUnique({
        where: { id: numId }
    });

    if (!tache) notFound();

    return (
        <>
            <p>{tache.titre}</p>
            <p>{tache.message}</p>
            <p>{tache.status}</p>
            <p>{tache.creerle.toLocaleDateString()}</p>
        </>
    );
}

export default CrudId