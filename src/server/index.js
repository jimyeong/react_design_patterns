import axios from "axios";
export const _axios = {
  url: "https://swapi.dev/api",
  get: async (endpoint, successCall, errorCall, paths) => {
    const host = _axios.url;
    const URI = host + endpoint;
    const result = await axios.get(URI);
    return result;
  },
  post: async (url, param, successCall, errorCall) => {
    const host = process.env.REACT_APP_HOST;
    const URI = host + url;
    return axios
      .post(URI, param, { withCredentials: true })
      .then(successCall)
      .catch(errorCall);
  },
};
