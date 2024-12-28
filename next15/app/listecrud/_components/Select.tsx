"use client"

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
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Tache, User } from '@prisma/client'

const SelectComponent = ({tache} : {tache : Tache}) => {

  const {data: utilisateurs, isLoading, error} = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get('/api/utilisateurs').then(res => res.data),
    retry : 3,
    staleTime: 60 * 1000
  })

  if(isLoading) return <p>Ca charge Kheyou </p>

  if(error) return <p>Une erreur est survenue</p>
  
  return (
 <div>
      <Select defaultValue={tache.assignerauserid || "NonAssigné"} onValueChange={(UserId) => {
     axios.patch(`/api/crud/`+ tache.id, { assignerauserid: UserId === "NonAssigné" ? null : UserId })

      }}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Utilisateur" />
      </SelectTrigger>
      <SelectContent> 
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          <SelectItem value="NonAssigné">NonAssigné</SelectItem>
          {utilisateurs?.map(utilisateur => (
               <SelectItem value={utilisateur.id || ""} key={utilisateur.id}>{utilisateur.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
 </div>

  )
}

export default SelectComponent