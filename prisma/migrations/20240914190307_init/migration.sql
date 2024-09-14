-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "color" TEXT NOT NULL DEFAULT 'white',
    "sort" TEXT NOT NULL DEFAULT 'priority',
    "categoryHome" TEXT NOT NULL DEFAULT '...',
    "list1" TEXT NOT NULL DEFAULT '...',
    "list2" TEXT NOT NULL DEFAULT 'Travail',
    "list3" TEXT NOT NULL DEFAULT 'Course',
    "list4" TEXT NOT NULL DEFAULT 'Maison'
);

-- CreateTable
CREATE TABLE "task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "issue" DATETIME NOT NULL,
    "priority" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT NOT NULL DEFAULT '...',
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "task_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
