const getFromUrl = (url) => {
  return url.split("/").slice(-2, -1)[0];
};

export default getFromUrl