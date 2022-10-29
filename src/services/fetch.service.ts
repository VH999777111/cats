import axios from "axios";

import { IS_DEVELOPMENT, API_ENDPOINT } from "../constants";

export const fetch = ({
  url = API_ENDPOINT,
  endPoint = "/",
  body = {},
  method = "GET",
  headers = {},
}) => {
  const config = {
    method,
    url: `${url}${endPoint}`,
    data: body,
    headers,
    params: {},
  };

  if (method === "GET") config.params = body;

  return axios(config);
};
