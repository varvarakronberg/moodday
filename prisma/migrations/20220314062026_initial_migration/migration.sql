-- CreateTable
CREATE TABLE "country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iso2" TEXT,
    "iso3" TEXT,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);
