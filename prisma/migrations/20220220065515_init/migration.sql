-- CreateTable
CREATE TABLE "Vehicule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "marque" TEXT NOT NULL,
    "modele" TEXT NOT NULL,
    "kilometrage" INTEGER NOT NULL,
    "etat" TEXT NOT NULL
);
