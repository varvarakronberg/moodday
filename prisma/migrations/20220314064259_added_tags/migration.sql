-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,
    "prompt_number" INTEGER NOT NULL,
    "is_preset" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);
