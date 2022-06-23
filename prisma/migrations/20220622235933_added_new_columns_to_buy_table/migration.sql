/*
  Warnings:

  - Added the required column `amount` to the `Buy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerName` to the `Buy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Buy" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "providerName" TEXT NOT NULL;
