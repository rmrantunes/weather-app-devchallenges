// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import metaWeatherFixture from "src/adapters/metaweather-fixture.json";

export default async function helloAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json(metaWeatherFixture);
  } catch (error) {
    res.status(500).json({ error });
  }
}
