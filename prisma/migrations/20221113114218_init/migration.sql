-- CreateTable
CREATE TABLE "Resident" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "commentaire" TEXT,
    "actif" BOOLEAN DEFAULT true,
    "dateNaissance" TIMESTAMP(3) NOT NULL,
    "statut" TEXT,
    "adresse" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chute" (
    "id" SERIAL NOT NULL,
    "lieu" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "commentaire" TEXT NOT NULL,
    "residentId" INTEGER NOT NULL,

    CONSTRAINT "Chute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chambre" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "etage" INTEGER NOT NULL,
    "actif" BOOLEAN NOT NULL,
    "cote" TEXT NOT NULL,
    "residentId" INTEGER NOT NULL,

    CONSTRAINT "Chambre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChambreCommentaire" (
    "id" SERIAL NOT NULL,
    "commentaire" TEXT NOT NULL,
    "chambreId" INTEGER NOT NULL,

    CONSTRAINT "ChambreCommentaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agent" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "commentaire" TEXT,
    "actif" BOOLEAN DEFAULT false,
    "dateNaissance" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "actif" BOOLEAN DEFAULT false,
    "lien" TEXT[],
    "sexe" TEXT,
    "commentaire" TEXT,
    "telephone_1_type" TEXT,
    "telephone_1_numero" TEXT,
    "telephone_2_type" TEXT,
    "telephone_2_numero" TEXT,
    "residentId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Constante" (
    "id" SERIAL NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "tension" DOUBLE PRECISION NOT NULL,
    "rythme" INTEGER NOT NULL,
    "residentId" INTEGER NOT NULL,

    CONSTRAINT "Constante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visite" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TIMESTAMP(3) NOT NULL,
    "residentId" INTEGER NOT NULL,

    CONSTRAINT "Visite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contrat" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "residentId" INTEGER NOT NULL,

    CONSTRAINT "Contrat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accueil" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "residentId" INTEGER NOT NULL,

    CONSTRAINT "Accueil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicule" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "marque" TEXT NOT NULL,
    "modele" TEXT NOT NULL,
    "kilometrage" INTEGER NOT NULL,
    "etat" TEXT NOT NULL,
    "immatriculation" TEXT NOT NULL,
    "commentaire" TEXT NOT NULL,
    "couleur" TEXT NOT NULL,

    CONSTRAINT "Vehicule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehiculeEvenement" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "debut" TIMESTAMP(3) NOT NULL,
    "fin" TIMESTAMP(3) NOT NULL,
    "vehiculeId" INTEGER NOT NULL,

    CONSTRAINT "VehiculeEvenement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animation" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lieu" TEXT NOT NULL,
    "debut" TIMESTAMP(3) NOT NULL,
    "fin" TIMESTAMP(3) NOT NULL,
    "exterieur" BOOLEAN NOT NULL,
    "animateurId" INTEGER NOT NULL,
    "residentId" INTEGER NOT NULL,

    CONSTRAINT "Animation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evenement" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Evenement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Visite_residentId_key" ON "Visite"("residentId");

-- CreateIndex
CREATE UNIQUE INDEX "Contrat_residentId_key" ON "Contrat"("residentId");

-- CreateIndex
CREATE UNIQUE INDEX "Accueil_residentId_key" ON "Accueil"("residentId");

-- AddForeignKey
ALTER TABLE "Chute" ADD CONSTRAINT "Chute_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chambre" ADD CONSTRAINT "Chambre_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChambreCommentaire" ADD CONSTRAINT "ChambreCommentaire_chambreId_fkey" FOREIGN KEY ("chambreId") REFERENCES "Chambre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Constante" ADD CONSTRAINT "Constante_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Visite" ADD CONSTRAINT "Visite_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contrat" ADD CONSTRAINT "Contrat_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accueil" ADD CONSTRAINT "Accueil_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehiculeEvenement" ADD CONSTRAINT "VehiculeEvenement_vehiculeId_fkey" FOREIGN KEY ("vehiculeId") REFERENCES "Vehicule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animation" ADD CONSTRAINT "Animation_animateurId_fkey" FOREIGN KEY ("animateurId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animation" ADD CONSTRAINT "Animation_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
