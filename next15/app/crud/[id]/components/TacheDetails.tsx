import React from 'react'
import BadgeTache from '@/components/BadgeTache'
import { Tache } from '@prisma/client'

interface Props {
    tache : Tache
}

const TacheDetails = ({tache} : Props) => {
  return (
    <div className="space-y-3">
      <div className="text-lg">{tache.titre}</div>
      <div>{tache.message}</div>
      <div><BadgeTache status={tache.status} /></div>
      <div>{tache.creerle.toLocaleDateString()}</div>
    </div>
  )
}

export default TacheDetails