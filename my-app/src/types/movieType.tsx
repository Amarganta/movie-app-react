export type Genre = {
  id: string;
  name: string;
};
type ProductionCompanie = {
  id: string;
  logo_path: string | null;
  name: string;
  origin_country: string;
};
type ProductionCountrie = {
  iso_3166_1: string;
  name: string;
};
type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
export type movieType = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: string | null;
  budget: number;
  genres: Genre[];
  genre_ids: [];
  homepage: string;
  id: string | null;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompanie[];
  production_countries: ProductionCountrie[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  query: string;
};
