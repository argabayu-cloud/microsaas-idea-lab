-- DropForeignKey
ALTER TABLE "Idea" DROP CONSTRAINT "Idea_userId_fkey";

-- CreateIndex
CREATE INDEX "Idea_userId_idx" ON "Idea"("userId");

-- AddForeignKey
ALTER TABLE "Idea" ADD CONSTRAINT "Idea_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
