import { api } from "./api";
import { movieType } from "../types/movieType";

export type GetMoviesResponse = {
  results: movieType[];
  page: number;
  total_pages: number;
  total_results: number;
};

const getPopular = async (): Promise<movieType[]> => {
  const { data } = await api.get<GetMoviesResponse>("/movie/popular");
  // console.log(data.results);
  //  array de objetos con las pelis
  // console.log(data);
  //  el objeto con results (peliculas), cantidad de paginas

  return data.results;
};
// const getLatest = async (): Promise<movieType[]> => {
//   const { data } = await api.get<GetMoviesResponse>("/movie/latest");
//   console.log(data.results);
//   return data.results;
// };
const getTopRated = async (): Promise<movieType[]> => {
  const { data } = await api.get<GetMoviesResponse>("/movie/top_rated");
  // console.log(data.results);
  return data.results;
};
const getUpcoming = async (page: number): Promise<movieType[]> => {
  const { data } = await api.get<GetMoviesResponse>(
    `/movie/upcoming?page=${page}`
  );
  console.log(data);
  return data.results;
};

const getNowPlayingData = async (): Promise<GetMoviesResponse> => {
  const { data } = await api.get<GetMoviesResponse>("/movie/upcoming");
  console.log(data);
  return data;
};
const getNowPlaying = async (page: number): Promise<movieType[]> => {
  const { data } = await api.get<GetMoviesResponse>(`movie/now_playing`);
  return data.results;
};
const getLatest = async (page: number): Promise<movieType[]> => {
  const { data } = await api.get<GetMoviesResponse>(
    `/movie/upcoming?page=${page}`
  );
  console.log(data.results);
  console.log(page);

  return data.results;
};

const getLatestData = async (): Promise<GetMoviesResponse> => {
  const { data } = await api.get<GetMoviesResponse>("/movie/upcoming");
  console.log(data);

  return data;
};
const getPopularData = async (): Promise<GetMoviesResponse> => {
  const { data } = await api.get<GetMoviesResponse>("/movie/top_rated");
  console.log(data);

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
  getLatestData,
  getMovieById,
  getNowPlaying,
  getNowPlayingData,
  getPopularData,
};
