const getIdFromUrl = (url) => {
  return url.split('/').filter(Boolean).pop();
};

export default getIdFromUrl;