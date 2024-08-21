export const findStarshipById = (starships, id) => {
  return starships.find((s) => s.url.endsWith(`${id}/`));
};
