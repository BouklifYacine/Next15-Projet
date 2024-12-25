"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import SchemaTaches from '../schema/schema-tache';
import axios from "axios"
import { useRouter } from 'next/navigation';

interface Formulaire {
  titre : string , 
  message : string
}

const Crud = () => {

  const {register, handleSubmit, reset, formState: {isSubmitting} } = useForm<Formulaire>({
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
    
    <form onSubmit={handleSubmit(OnSubmit)} className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor="titre">Titre</Label>
        <Input type="text" id="titre" placeholder="Titre" className="w-full" {...register("titre")} />
      </div>

      <div className='space-y-2'>
        <Label htmlFor="message">Message</Label>
        <Input type="text" id="message" placeholder="Message" className="w-full" {...register("message")} />
      </div>

      <Button disabled={isSubmitting} type="submit" className='w-full bg-blue-500 hover:bg-blue-600'>
      {isSubmitting ? 'En cours...' : 'Valider'}
      </Button>
    </form>
  </div>
  )
}

export default Crud