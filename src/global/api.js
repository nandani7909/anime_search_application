import axios from "axios";

/**
 * @author      Nandani.V.Patel
 * @date        07th Dec 2024
 * @description comman function of axios api call like get method.
 * @param       api url and req params
 * @response      
**/

const BACKEND_API = 'https://api.jikan.moe/';

export function getRequestAPI({ url = '', params = {} }) {
  return axios.get(`${BACKEND_API}${url}`, { params });
}
