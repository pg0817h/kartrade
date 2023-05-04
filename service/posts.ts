import queryString from "query-string";
import { ParsedUrlQuery } from "querystring";


const generateSearchParams = (params : ParsedUrlQuery) => {
  const url =queryString.stringifyUrl({url:'http://localhost:3000/api/cards', query: {...params} })
  return url;
};
export const fetchCards = async (params : ParsedUrlQuery) => {
  const url = generateSearchParams(params);
  const res = await fetch(url);
  return await res.json();
};
