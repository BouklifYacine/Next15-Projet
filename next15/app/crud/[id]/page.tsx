
import prisma from "@/prisma/db";
import { notFound } from "next/navigation";
import React from "react";
import TacheDetails from "../-components/TacheDetails";
import BoutonEditEtSupprimer from "../-components/BoutonEditEtSupprimer";
import SelectComponent from "@/app/listecrud/_components/Select";

interface Props {
  params: Promise<{ id: string }>;
}

const CrudId = async ({ params }: Props) => {
  const { id } = await params;
  const numId = parseInt(id);

  if (isNaN(numId)) notFound();

  const tache = await prisma.tache.findUnique({
    where: { id: numId },
  });

  if (!tache) notFound();

  return (
    <>
    <SelectComponent tache={tache}></SelectComponent>
      <TacheDetails tache={tache}></TacheDetails>
      <div className="flex gap-x-5">
        <BoutonEditEtSupprimer TacheId={tache.id}></BoutonEditEtSupprimer>
      </div>
    </>
  );
};

export default CrudId;
