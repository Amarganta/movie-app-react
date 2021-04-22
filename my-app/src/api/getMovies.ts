import { api } from "./api";
import { movieType } from "../types/movieType";

export type GetMoviesResponse = {
  results: movieType[];
  page: number;
  total_pages: number;
  total_results: number;
};

const getPopular = async (page: number): Promise<movieType[]> => {
  const { data } = await api.get<GetMoviesResponse>(
    `/movie/popular?page=${page}`
  );
  // console.log(data.results);
  //  array de objetos con las pelis
  // console.log(data);
  //  el objeto con results (peliculas), cantidad de paginas

  return data.results;
};
const getTopRated = async (): Promise<movieType[]> => {
  const { data } = await api.get<GetMoviesResponse>("/movie/top_rated");
  // console.log(data.results);
  return data.results;
};

const getUpcoming = async (page: number): Promise<movieType[]> => {
  const { data } = await api.get<GetMoviesResponse>(
    `/movie/upcoming?page=${page}`
  );
  // console.log(data.results);
  // console.log(page);

  return data.results;
};

const getUpcomingtData = async (): Promise<GetMoviesResponse> => {
  const { data } = await api.get<GetMoviesResponse>("/movie/upcoming");
  // console.log(data);

  return data;
};
const getPopularData = async (): Promise<GetMoviesResponse> => {
  const { data } = await api.get<GetMoviesResponse>("/movie/popular");
  // console.log(data);

  return data;
};
const getMovieById = async (id: string) => {
  const data = await api.get<movieType>("movie/" + id);
  return data.data;
};

export const lists = {
  getPopular,
  getUpcoming,
  getTopRated,
  getMovieById,
  getPopularData,
  getUpcomingtData,
};
