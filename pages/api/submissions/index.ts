// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// submission:
//     id
//     tags: list<tag_id>
//     city_id null
//     author_name null
//     origin_country_id null
//     color: list<color_code>
export type Submission = {};

type SubmissionInputModel = {
  tagIds: Array<Number>;
  colors: Array<String>;
  authorName?: String;
  cityId?: Number;
  originCountryId?: Number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Submission>>
) {
  //     request body:
  // {
  //     tags: [5+ tags], // string
  //     colors: [1-5 colors], // string
  //     name, // string
  //     location_id // id
  // }
  if (req.method === "POST") {
    console.log(req.body);
    const submissionInputModel: SubmissionInputModel = JSON.parse(
      JSON.stringify(req.body)
    );
    const submissionPrismaCreateModel = {
      colors: [...submissionInputModel.colors],
      authorName: submissionInputModel.authorName,
      tags: {
        connect: submissionInputModel.tagIds.map((id) => {
          return { id: id };
        }),
      },
      cities: { connect: { id: submissionInputModel.cityId } },
      originCountry: { connect: { id: submissionInputModel.originCountryId } },
    };
    await prisma.submission.create({ data: submissionPrismaCreateModel });
    res.status(201);
  } else if (req.method === "GET") {
    const submissions = await prisma.submission.findMany({
      include: {
        tags: true,
        cities: { select: { name: true, country: true } },
      },
    });
    res.status(200).json(submissions);
  }
  //   const countries = await prisma.country.findMany();
  //   const autoCompleteResults = countries.map((c) => {
  //     const ac: CountryAutocomplete = { id: c.id, name: c.name };
  //     return ac;
  //   });
  //   res.status(200).json(autoCompleteResults);
}
