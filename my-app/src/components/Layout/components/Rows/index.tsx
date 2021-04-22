import React, { FC, useState, useEffect } from "react";
import { movieType } from "../../../../types/movieType";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";
interface Props {
  data?: movieType;
  dataSource: Function;
  title: string;
}

const Rows: FC<Props> = ({ dataSource, title }) => {
  const base_img = "https://image.tmdb.org/t/p/";
  const size_img_poster = "w300";

  const [movies, setMovies] = useState<movieType[]>();
  useEffect(() => {
    dataSource().then((response: movieType[]) => {
      setMovies(response);
    });
  }, [dataSource]);
  // console.log(movies);

  return (
    <div className="custom-background">
      <div className="popular-movies custom-container">
        <div>
          <h4 className="title">{title}</h4>
        </div>
        <div className="main-container">
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
        </div>
      </div>
    </div>
  );
};

export { Rows };
