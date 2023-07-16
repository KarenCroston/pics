import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID c4ZUIDULvSXisw00ScXETizq2xHqkJxJIF9anFb15ds",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
