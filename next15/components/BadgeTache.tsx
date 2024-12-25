import { Status } from '@prisma/client'
import { Badge } from "@/components/ui/badge"
import React from 'react'
interface Props {
    status : Status
}

const BadgeTache = ({status} : Props) => {

    if (status === "OUVERT") return <Badge className="bg-green-500 hover:bg-green-600 text-white">Ouvert</Badge> 
    else if (status === "EN_PROGRES" )  return <Badge className="bg-blue-500 hover:bg-blue-600 text-white">En Progrès</Badge>

  return (
    <Badge className="bg-red-500 hover:bg-red-600 text-white">Fermer</Badge>
  )
}

export default BadgeTache