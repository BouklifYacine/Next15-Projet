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
import toast, {Toaster} from "react-hot-toast"

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
      <Select defaultValue={tache.assignerauserid || "NonAssigné"} 
      onValueChange={ async (UserId) => {
        try {
          await axios.patch(`/api/crud/`+ tache.id, { assignerauserid: UserId === "NonAssigné" ? null : UserId })
          toast.success(" Changement d'utilisateur réussi ")
        } catch (error) {
          toast.error("Le changement n'a pas pu etre effectué")
          console.log(error)
        }
   

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
    <Toaster/>
 </div>

  )
}

export default SelectComponent