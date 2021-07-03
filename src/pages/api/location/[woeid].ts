import { API_ENDPOINTS } from "src/adapters/metaweather-api-definitions";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function lcationByWoeid(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { woeid },
  } = req;
  const { data } = await axios.get(`${API_ENDPOINTS.BASE}/${woeid}/`);

  res.status(200).json(data);
}
