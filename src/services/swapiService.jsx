import axios from "axios";

const fetchData = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("The information could not be obtained. Try again later.");
  }
};

export default fetchData;
