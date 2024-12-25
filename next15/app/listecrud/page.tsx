import React from 'react'
import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import prisma from '@/prisma/db'

const ListeCrud = async () => {

    const issues = await prisma.tache.findMany()

  return (
    <div>
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
  {issues.map(issue =>  <TableRow key={issue.id}>
    <TableCell >{issue.id}</TableCell>
    <TableCell className='font-bold hover:text-gray-500 cursor-pointer' >{issue.titre}</TableCell>
    <TableCell >{issue.message}</TableCell>
    <TableCell >{issue.status}</TableCell>
    <TableCell >{issue.creerle.toLocaleTimeString()}</TableCell>
  </TableRow> )}
  
  </TableBody>
</Table>

    </div>
  )
}

export default ListeCrud