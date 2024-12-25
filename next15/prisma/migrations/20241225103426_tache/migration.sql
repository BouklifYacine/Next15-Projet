/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OUVERT', 'EN_PROGRES', 'FERMER');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Tache" (
    "id" SERIAL NOT NULL,
    "titre" VARCHAR(255) NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'OUVERT',
    "creerle" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "misajour" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tache_pkey" PRIMARY KEY ("id")
);
