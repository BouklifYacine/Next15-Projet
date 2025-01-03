"use client"

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

const BoutonEditEtSupprimer = ({ TacheId }: { TacheId: number }) => {

  const router = useRouter()

  const Supprimertache = async () => {
  await axios.delete(`/api/crud/${TacheId}`)
  router.push('/listecrud')
  router.refresh()}

  return (
    <>
      <Link href={`/crud/${TacheId}/edit`}>
        <Button className="bg-yellow-500 rounded-xl mt-6"> Editer </Button>
      </Link>
      <AlertDialog>
        <AlertDialogTrigger asChild className="">
        <Button className="bg-red-500 rounded-xl mt-6"> Supprimer </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Voulez vous Supprimez votre tache?</AlertDialogTitle>
            <AlertDialogDescription>
              En appuyant sur valider votre tache sera définitivement supprimer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-red-500 border-none rounded-xl">Annuler</AlertDialogCancel>
            <AlertDialogAction className="bg-blue-500 border-none rounded-xl" onClick={Supprimertache}>Valider</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default BoutonEditEtSupprimer;
