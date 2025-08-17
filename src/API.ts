import axios from "axios";

const accessKey = "845BOwbuyz6uHcsYPcGukcwZ1vLTquVmZTXWjs5SJIw";

export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string;
  };
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

const API = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
});

const fetchData = async (
  query: string = "",
  page: number = 1,
  per_page: number = 12
): Promise<UnsplashResponse> => {
  const { data } = await API.get<UnsplashResponse>("search/photos", {
    params: { query, page, per_page },
  });

  return data;
};

export default fetchData;
