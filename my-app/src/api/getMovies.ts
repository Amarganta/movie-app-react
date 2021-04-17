import { api } from "./api";
import { movieType } from "../types/movieType";

type GetMoviesResponse = {
  results: movieType[];
  page: number;
  total_pages: number;
  total_results: number;
};

const getPopular = async (): Promise<movieType[]> => {
  const { data } = await api.get<GetMoviesResponse>("/movie/popular");
  console.log(data.results);
  //  array de objetos con las pelis
  console.log(data);
  //  el objeto con results (peliculas), cantidad de paginas

  return data.results;
};

const getTopRated = async (): Promise<movieType[]> => {
  const { data } = await api.get<GetMoviesResponse>("/movie/top_rated");
  return data.results;
};

const getUpcoming = () => {
  const data = api.get("/movie/upcoming").then((res) => {
    console.log(res.data.results);
  });
  return data;
};

const getLatest = () => {
  const data = api.get("/movie/latest").then((res) => {
    console.log(res.data.results);
  });
  return data;
};
const getMovieById = async (id: string) => {
  const data = await api.get<movieType>("movie/" + id);
  return data.data;
};

// const getVideo = async (id: string) => {
//   const data = await api.get<VideoType>("movie/" + id + "/videos");
//   return data.data;
// };
export const lists = {
  getPopular,
  getUpcoming,
  getTopRated,
  getLatest,
  getMovieById,
};
