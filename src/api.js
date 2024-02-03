import axios from "axios";

const searchImage = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Gtv_LlsChkkYMQqz-2BbAJr08ZhOt1FA318FTLJDhP8",
    },
    params: {
      query: searchTerm,
    },
  });

  console.log(response);
  return response;
};

export default searchImage;
