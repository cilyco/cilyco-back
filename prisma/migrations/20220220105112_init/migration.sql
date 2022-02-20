/*
  Warnings:

  - You are about to drop the column `date` on the `Animation` table. All the data in the column will be lost.
  - Added the required column `debut` to the `Animation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fin` to the `Animation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Constante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "temperature" REAL NOT NULL,
    "tension" REAL NOT NULL,
    "rythme" INTEGER NOT NULL,
    "residentId" INTEGER NOT NULL,
    CONSTRAINT "Constante_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VehiculeEvenement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vehiculeId" INTEGER NOT NULL,
    "debut" DATETIME NOT NULL,
    "fin" DATETIME NOT NULL,
    CONSTRAINT "VehiculeEvenement_vehiculeId_fkey" FOREIGN KEY ("vehiculeId") REFERENCES "Vehicule" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Animation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lieu" TEXT NOT NULL,
    "debut" DATETIME NOT NULL,
    "fin" DATETIME NOT NULL
);
INSERT INTO "new_Animation" ("createdAt", "id", "lieu") SELECT "createdAt", "id", "lieu" FROM "Animation";
DROP TABLE "Animation";
ALTER TABLE "new_Animation" RENAME TO "Animation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
