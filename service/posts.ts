interface CardSearchParams {
  sort: string | string[] | undefined;
  search: string | string[] | undefined;
}
const generateSearchParams = (params: CardSearchParams) => {
  const url = new URL('http://localhost:3000/api/sort/cards?');
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });
  return url;
};
export const fetchCards = async (params: CardSearchParams) => {
  const url = generateSearchParams(params);
  const res = await fetch(url.href);
  return await res.json();
};
