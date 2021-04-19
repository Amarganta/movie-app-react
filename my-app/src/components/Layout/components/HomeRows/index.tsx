import React, { FC, useState, useEffect } from "react";
import { movieType } from "../../../../types/movieType";
import { lists } from "../../../../api";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";
interface Props {
  data?: movieType;
}

const HomeRows: FC<Props> = () => {
  const base_img = "https://image.tmdb.org/t/p/";
  const size_img_poster = "w300";

  const [movies, setMovies] = useState<movieType[]>();
  useEffect(() => {
    lists.getPopular().then((response) => {
      setMovies(response);
    });
  }, []);
  // console.log(movies);

  const [topMovies, setTopMovies] = useState<movieType[]>();
  useEffect(() => {
    lists.getTopRated().then((response) => {
      setTopMovies(response);
    });
  }, []);
  // console.log(topMovies);

  return (
    <div className="custom-background">
      <div className="popular-movies custom-container">
        <div>
          <h4 className="title">Popular movies</h4>
        </div>
        <div className="main-container">
          {/* <button id="arrow-left" className="arrow-left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button> */}

          <div className="carousel-container">
            <div className="carousel">
              {movies?.map((movie: movieType) => (
                <div className="movie" key={movie.id}>
                  <Link to={`/detail/${movie.id}`}>
                    <img
                      src={base_img + size_img_poster + movie.poster_path}
                      alt={movie.title}
                      className="poster"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* <button id="arrow-right" className="arrow-right">
            <FontAwesomeIcon icon={faChevronRight} />
          </button> */}
        </div>
      </div>
      <div className="popular-movies custom-container">
        <div>
          <h4 className="title">Top rated movies</h4>
        </div>
        <div className="main-container">
          {/* <button id="arrow-left" className="arrow-left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button> */}

          <div className="carousel-container">
            <div className="carousel">
              {topMovies?.map((topMovie: movieType) => (
                <div className="movie" key={topMovie.id}>
                  <Link to={`/detail/${topMovie.id}`}>
                    <img
                      src={base_img + size_img_poster + topMovie.poster_path}
                      alt={topMovie.title}
                      className="poster"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* <button id="arrow-right" className="arrow-right">
            <FontAwesomeIcon icon={faChevronRight} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export { HomeRows };
