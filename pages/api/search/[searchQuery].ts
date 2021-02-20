import { API_ENDPOINTS } from "adapters/metaweather-api-definitions";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function lcationByWoeid(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      query: { searchQuery },
    } = req;

    const apiUrl = `${API_ENDPOINTS.BASE}${API_ENDPOINTS.SEARCH}${searchQuery}`;
    const { data } = await axios.get(apiUrl);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
