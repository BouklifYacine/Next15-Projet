import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Status } from '@prisma/client'



const SelectFiltre = () => {

    const status: {label:string, valeur?: Status | "Tous"}[] = [
        {label: "Tous", valeur: "Tous"},
        {label: "Ouvert" , valeur : "OUVERT"},
        {label: "EN_PROGRES" , valeur : "EN_PROGRES"},
        {label: "Fermer" , valeur : "FERMER"},
    ]

  return (
    
  <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Filtrer par statut" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Status</SelectLabel>
    {status.map(statut => (
          <SelectItem key={statut.label} value={statut.valeur || ""}>{statut.valeur}</SelectItem>
    ))}
   
    </SelectGroup>
  </SelectContent>
</Select>
  )
}

export default SelectFiltre