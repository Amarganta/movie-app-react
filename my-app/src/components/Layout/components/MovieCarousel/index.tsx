import React, { FC, useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { movieType } from "../../../../types/movieType";
import { lists } from "../../../../api";
import "./style.css";
interface Props {
  data?: movieType;
}
const MovieCarousel: FC<Props> = () => {
  const [carousel, setCarousel] = useState<movieType[]>();
  useEffect(() => {
    lists.getPopular(1).then((response) => {
      setCarousel(response);
    });
  }, []);

  const base_img = "https://image.tmdb.org/t/p/";
  const size_img = "w1280";
  // para llamar a poster, o miniaturas, utilizar w500 que son mas chicas
  return (
    <div>
      <div>
        <Carousel fade>
          {carousel?.map((item: movieType) => (
            <Carousel.Item className="carousel-height" key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <img
                  className="d-block w-100 "
                  src={base_img + size_img + item.backdrop_path}
                  alt="movie-backdrop-path"
                />
                <Carousel.Caption className="caption">
                  <h3>{item.title}</h3>
                  <p>{item.overview}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export { MovieCarousel };
