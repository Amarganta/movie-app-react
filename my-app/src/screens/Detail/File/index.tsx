import React, { FC, useState, useEffect } from "react";
import { movieType } from "../../../types/movieType";
import { Genre } from "../../../types/movieType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { video } from "../../../api";
import "./style.css";
import { videoType } from "../../../types/videoType";
interface Props {
  movie: movieType;
}
const File: FC<Props> = ({ movie }) => {
  const [trailer, setTrailer] = useState<videoType | undefined>(undefined);
  useEffect(() => {
    window.scrollTo(0, 74);
    video.getVideo(`${movie.id}`).then((response) => {
      setTrailer(response);
    });
  }, [movie.id]);
  console.log(trailer);
  const video_base = "https://www.youtube.com/watch?v=";
  const img = "https://image.tmdb.org/t/p/";
  const poster_width = "w500";
  const background_width = "original";

  return (
    <div
      className="background_img"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
          img + background_width + movie.backdrop_path
        })`,
      }}
    >
      <div className="custom_container">
        <div className="poster">
          <div
            className="poster_img"
            style={{
              backgroundImage: `url(${img + poster_width + movie.poster_path})`,
            }}
          ></div>
        </div>
        <div className="info">
          <div className="movie_info_header">
            <h1>
              {movie.title}
              <span>{movie.release_date.split("-", 1)}</span>
            </h1>
            <button>
              {trailer?.results[0] ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={video_base + trailer?.results[0].key!}
                >
                  <FontAwesomeIcon icon={faPlayCircle} />
                  <span>Trailer</span>
                </a>
              ) : (
                <span>Trailer not available</span>
              )}
            </button>
          </div>
          <div className="content">
            <h6>OVERVIEW</h6>
            <p>{movie.overview}</p>
          </div>
          <div className="gender">
            <h6>GENRE</h6>
            <ul>
              {movie.genres &&
                movie.genres.map((genre: Genre) => {
                  return <li key={movie.id}>{genre.name}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { File };
