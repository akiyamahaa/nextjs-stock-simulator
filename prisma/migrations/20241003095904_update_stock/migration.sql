/*
  Warnings:

  - You are about to alter the column `volume` on the `Stock` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Stock" ALTER COLUMN "volume" SET DATA TYPE INTEGER;
