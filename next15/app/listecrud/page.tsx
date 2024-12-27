import React from 'react'
import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import prisma from '@/prisma/db'
import BadgeTache from '@/components/BadgeTache'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { auth } from "@/auth"
import { redirect } from 'next/navigation'
import SelectComponent from './_components/Select'

const ListeCrud = async () => {
     const session = await auth()
        if (!session) redirect("/")

    const taches = await prisma.tache.findMany()

  return (
    <div>
        <div className='flex gap-x-5 mt-5'>
        <Link href="/crud"> <Button className='bg-blue-500'> Nouvelle tache </Button></Link>
      <SelectComponent></SelectComponent>
        </div>
    
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Titre</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Heure de création</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {taches.map(tache => (
                        <TableRow key={tache.id}>
                            <TableCell>{tache.id}</TableCell>
                            <TableCell>
                                <Link href={`/crud/${tache.id}`} className='font-bold hover:text-gray-500'>
                                    {tache.titre}
                                </Link>
                            </TableCell>
                            <TableCell>{tache.message}</TableCell>
                            <TableCell><BadgeTache status={tache.status} /></TableCell>
                            <TableCell>{tache.creerle.toLocaleTimeString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
  )
}

export default ListeCrud