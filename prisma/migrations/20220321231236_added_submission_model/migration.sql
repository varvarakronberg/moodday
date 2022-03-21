-- CreateTable
CREATE TABLE "submission" (
    "id" SERIAL NOT NULL,
    "authorName" TEXT NOT NULL,
    "colors" TEXT[],

    CONSTRAINT "submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_countryTosubmission" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_cityTosubmission" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_submissionTotag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_countryTosubmission_AB_unique" ON "_countryTosubmission"("A", "B");

-- CreateIndex
CREATE INDEX "_countryTosubmission_B_index" ON "_countryTosubmission"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_cityTosubmission_AB_unique" ON "_cityTosubmission"("A", "B");

-- CreateIndex
CREATE INDEX "_cityTosubmission_B_index" ON "_cityTosubmission"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_submissionTotag_AB_unique" ON "_submissionTotag"("A", "B");

-- CreateIndex
CREATE INDEX "_submissionTotag_B_index" ON "_submissionTotag"("B");

-- AddForeignKey
ALTER TABLE "_countryTosubmission" ADD FOREIGN KEY ("A") REFERENCES "country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_countryTosubmission" ADD FOREIGN KEY ("B") REFERENCES "submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_cityTosubmission" ADD FOREIGN KEY ("A") REFERENCES "city"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_cityTosubmission" ADD FOREIGN KEY ("B") REFERENCES "submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_submissionTotag" ADD FOREIGN KEY ("A") REFERENCES "submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_submissionTotag" ADD FOREIGN KEY ("B") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
