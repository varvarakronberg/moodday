// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Submission } from ".";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Submission>
) {
  const submissionId = req.query.submissionId;

  //   const countries = await prisma.country.findMany({
  //     where: { name: { startsWith: user_input[0] } },
  //   });
  //   const autoCompleteResults = countries.map((c) => {
  //     const ac: CountryAutocomplete = { id: c.id, name: c.name };
  //     return ac;
  //   });

  //res.status(200).json(autoCompleteResults);
}
