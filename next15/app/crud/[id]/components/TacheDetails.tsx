import React from 'react'
import BadgeTache from '@/components/BadgeTache'
import { Tache } from '@prisma/client'

interface Props {
    tache : Tache
}

const TacheDetails = ({tache} : Props) => {
  return (
    <>
        <p>{tache.titre}</p>
            <p>{tache.message}</p>
            <p><BadgeTache status={tache.status}></BadgeTache></p>
            <p>{tache.creerle.toLocaleDateString()}</p>
    </>
  )
}

export default TacheDetails