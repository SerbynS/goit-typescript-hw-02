import axios from "axios";

const accessKey = "845BOwbuyz6uHcsYPcGukcwZ1vLTquVmZTXWjs5SJIw";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchArticlesWithTopic = async (photo) => {
  const response = await axios.get(`/search/photos?page=1&query=${photo}`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });
  return response.data.results;
};
