/*
  Warnings:

  - Made the column `password` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT 'white',
    "sort" TEXT NOT NULL DEFAULT 'priority',
    "categoryHome" TEXT NOT NULL DEFAULT '...',
    "list1" TEXT NOT NULL DEFAULT '...',
    "list2" TEXT NOT NULL DEFAULT 'Travail',
    "list3" TEXT NOT NULL DEFAULT 'Course',
    "list4" TEXT NOT NULL DEFAULT 'Maison'
);
INSERT INTO "new_user" ("categoryHome", "color", "email", "id", "list1", "list2", "list3", "list4", "password", "sort", "userName") SELECT "categoryHome", "color", "email", "id", "list1", "list2", "list3", "list4", "password", "sort", "userName" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
