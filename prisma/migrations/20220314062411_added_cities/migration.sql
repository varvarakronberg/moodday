-- CreateTable
CREATE TABLE "city" (
    "id" SERIAL NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "city_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
