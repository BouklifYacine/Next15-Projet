-- AlterTable
ALTER TABLE "Tache" ADD COLUMN     "assignerauserid" VARCHAR(255);

-- AddForeignKey
ALTER TABLE "Tache" ADD CONSTRAINT "Tache_assignerauserid_fkey" FOREIGN KEY ("assignerauserid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
