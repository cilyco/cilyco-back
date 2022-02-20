/*
  Warnings:

  - Added the required column `immatriculation` to the `Vehicule` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vehicule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "marque" TEXT NOT NULL,
    "modele" TEXT NOT NULL,
    "kilometrage" INTEGER NOT NULL,
    "etat" TEXT NOT NULL,
    "immatriculation" TEXT NOT NULL
);
INSERT INTO "new_Vehicule" ("createdAt", "etat", "id", "kilometrage", "marque", "modele") SELECT "createdAt", "etat", "id", "kilometrage", "marque", "modele" FROM "Vehicule";
DROP TABLE "Vehicule";
ALTER TABLE "new_Vehicule" RENAME TO "Vehicule";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
