import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const BoutonEditEtSupprimer = ({TacheId} : {TacheId : number}) => {
  return (
    <>
        <Link href={`/crud/${TacheId}/edit`}
    ><Button className='bg-yellow-500 rounded-xl mt-6'> Editer </Button>
    </Link>
    <Button className='bg-red-500 rounded-xl mt-6'> Supprimer </Button>
    </>
  )
}

export default BoutonEditEtSupprimer