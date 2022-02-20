-- CreateTable
CREATE TABLE "Chambre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" INTEGER NOT NULL,
    "etage" INTEGER NOT NULL,
    "actif" BOOLEAN NOT NULL,
    "cote" TEXT NOT NULL,
    "residentId" INTEGER NOT NULL,
    CONSTRAINT "Chambre_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChambreCommentaire" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "commentaire" TEXT NOT NULL,
    "chambreId" INTEGER NOT NULL,
    CONSTRAINT "ChambreCommentaire_chambreId_fkey" FOREIGN KEY ("chambreId") REFERENCES "Chambre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
