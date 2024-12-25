import BadgeTache from '@/components/BadgeTache'
import { Button } from '@/components/ui/button'
import prisma from '@/prisma/db'
import Link from 'next/link'
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
            <p><BadgeTache status={tache.status}></BadgeTache></p>
            <p>{tache.creerle.toLocaleDateString()}</p>

<div className='flex gap-x-5'>
    <Link href={`/crud/${tache.id}/edit`}
    ><Button className='bg-yellow-500 rounded-xl mt-6'> Editer </Button>
    </Link>
    <Button className='bg-red-500 rounded-xl mt-6'> Supprimer </Button>
</div>
            
        </>
    );
}

export default CrudId