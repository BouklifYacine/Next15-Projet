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
import { User } from '@prisma/client'

const SelectComponent = () => {

  const {data: utilisateurs, isLoading, error} = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get('/api/utilisateurs').then(res => res.data),
    retry : 3,
    staleTime: 60 * 1000
  })

  if(isLoading) return <p>Ca charge Kheyou </p>
  
  return (
 <div>
      <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Utilisateur" />
      </SelectTrigger>
      <SelectContent> 
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          {utilisateurs?.map(utilisateur => (
               <SelectItem value={utilisateur.name || ""} key={utilisateur.id}>{utilisateur.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
 </div>

  )
}

export default SelectComponent