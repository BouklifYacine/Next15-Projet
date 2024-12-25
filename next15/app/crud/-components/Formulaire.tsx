"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import SchemaTaches from '../../schema/schema-tache';
import axios from "axios"
import { useRouter } from 'next/navigation';
import { Tache } from '@prisma/client'

interface Formulaire {
  titre : string , 
  message : string
}

interface Props {
    tache? : Tache
}

const Formulaire = ({tache} : Props) => {

  const {register, handleSubmit, reset, formState: {isSubmitting, errors} } = useForm<Formulaire>({
    resolver: zodResolver(SchemaTaches),
  })

  const router = useRouter()

  const OnSubmit = async (data : Formulaire) => {
    await axios.post('/api/crud', data)
    router.push('/')
    router.refresh()
    console.log(data)
    reset()
  }
  return (
    <div className='w-96 mx-auto mt-8'>
    <h1 className='text-center text-3xl font-bold text-blue-500 mb-4'> 
      Créer votre tâche 
    </h1>
    <p> </p>
    
    <form onSubmit={handleSubmit(OnSubmit)} className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor="titre">Titre</Label>
        <Input type="text" id="titre" defaultValue={tache?.titre} placeholder="Titre" className="w-full" {...register("titre")} />
        {errors.titre && <p className='text-red-500'> {errors.titre?.message} </p>}
      </div>

      <div className='space-y-2'>
        <Label htmlFor="message">Message</Label>
        <Input type="text" id="message" defaultValue={tache?.message} placeholder="Message" className="w-full" {...register("message")} />
        {errors.message && <p className='text-red-500'> {errors.message?.message} </p>}
      </div>

      <Button disabled={isSubmitting} type="submit" className='w-full bg-blue-500 hover:bg-blue-600'>
      {isSubmitting ? 'En cours...' : 'Valider'}
      </Button>
    </form>
  </div>
  )
}

export default Formulaire