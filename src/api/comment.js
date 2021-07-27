import axios from "axios";

const getComments = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`
    );

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default getComments;
