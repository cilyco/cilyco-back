/*
  Warnings:

  - You are about to drop the `_AgentToAnimation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnimationToResident` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `animateurId` to the `Animation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exterieur` to the `Animation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `residentId` to the `Animation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_AgentToAnimation_B_index";

-- DropIndex
DROP INDEX "_AgentToAnimation_AB_unique";

-- DropIndex
DROP INDEX "_AnimationToResident_B_index";

-- DropIndex
DROP INDEX "_AnimationToResident_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_AgentToAnimation";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_AnimationToResident";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Animation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lieu" TEXT NOT NULL,
    "debut" DATETIME NOT NULL,
    "fin" DATETIME NOT NULL,
    "exterieur" BOOLEAN NOT NULL,
    "animateurId" INTEGER NOT NULL,
    "residentId" INTEGER NOT NULL,
    CONSTRAINT "Animation_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Animation_animateurId_fkey" FOREIGN KEY ("animateurId") REFERENCES "Agent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Animation" ("createdAt", "debut", "fin", "id", "lieu") SELECT "createdAt", "debut", "fin", "id", "lieu" FROM "Animation";
DROP TABLE "Animation";
ALTER TABLE "new_Animation" RENAME TO "Animation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
