import React from 'react'

import prisma from '@/prisma/db'
import { notFound } from 'next/navigation'
import Formulaire from '../../-components/Formulaire'

interface Props {
    params : { id : string }
}


const Nouveau = async ({params} : Props) => {
    const tache = await prisma.tache.findUnique({
        where : { id : parseInt(params.id)}
    })

    if(!tache) notFound()
  return (
   <Formulaire tache={tache}></Formulaire>
  )
}

export default Nouveau