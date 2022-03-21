/*
  Warnings:

  - Added the required column `name` to the `city` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "city" ADD COLUMN     "name" TEXT NOT NULL;
