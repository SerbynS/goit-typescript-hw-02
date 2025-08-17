import axios from "axios";

const accessKey = "845BOwbuyz6uHcsYPcGukcwZ1vLTquVmZTXWjs5SJIw";

const API = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
});

const fetchData = async (query = "", page = 1, per_page = 12) => {
  const data = await API.get("search/photos/", {
    params: { query, page, per_page },
  });
  return data;
};

export default fetchData;
