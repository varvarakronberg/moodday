// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CountryAutocomplete = {
  id: Number;
  name: String;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CountryAutocomplete[]>
) {
  const countries = await prisma.country.findMany();
  const autoCompleteResults = countries.map((c) => {
    const ac: CountryAutocomplete = { id: c.id, name: c.name };
    return ac;
  });

  res.status(200).json(autoCompleteResults);
}

//why [countries] and index the way they are (almost same but with difference) and how is it all connected?
