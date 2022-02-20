/*
  Warnings:

  - Made the column `residentId` on table `Accueil` required. This step will fail if there are existing NULL values in that column.
  - Made the column `residentId` on table `Visite` required. This step will fail if there are existing NULL values in that column.
  - Made the column `residentId` on table `Contrat` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "Agent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "commentaire" TEXT,
    "actif" BOOLEAN DEFAULT false,
    "dateNaissance" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Animation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lieu" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_AgentToAnimation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Agent" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Animation" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AnimationToResident" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Animation" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Resident" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Accueil" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "residentId" INTEGER NOT NULL,
    CONSTRAINT "Accueil_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Accueil" ("createdAt", "id", "residentId") SELECT "createdAt", "id", "residentId" FROM "Accueil";
DROP TABLE "Accueil";
ALTER TABLE "new_Accueil" RENAME TO "Accueil";
CREATE UNIQUE INDEX "Accueil_residentId_key" ON "Accueil"("residentId");
CREATE TABLE "new_Visite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "residentId" INTEGER NOT NULL,
    CONSTRAINT "Visite_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Visite" ("createdAt", "id", "residentId") SELECT "createdAt", "id", "residentId" FROM "Visite";
DROP TABLE "Visite";
ALTER TABLE "new_Visite" RENAME TO "Visite";
CREATE UNIQUE INDEX "Visite_residentId_key" ON "Visite"("residentId");
CREATE TABLE "new_Contrat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "residentId" INTEGER NOT NULL,
    CONSTRAINT "Contrat_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Contrat" ("createdAt", "id", "residentId") SELECT "createdAt", "id", "residentId" FROM "Contrat";
DROP TABLE "Contrat";
ALTER TABLE "new_Contrat" RENAME TO "Contrat";
CREATE UNIQUE INDEX "Contrat_residentId_key" ON "Contrat"("residentId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_AgentToAnimation_AB_unique" ON "_AgentToAnimation"("A", "B");

-- CreateIndex
CREATE INDEX "_AgentToAnimation_B_index" ON "_AgentToAnimation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AnimationToResident_AB_unique" ON "_AnimationToResident"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimationToResident_B_index" ON "_AnimationToResident"("B");
