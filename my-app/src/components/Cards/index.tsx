import React, { FC, useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { movieType } from "../../types/movieType";
import img_not_found from "../../assets/img/not_img.png";
import "./styles.css";
import { Link } from "react-router-dom";
interface Props {
  data?: movieType;
  pag: number;
  dataSource: Function;
}
const Cards: FC<Props> = ({ pag, dataSource }) => {
  const [movies, setMovies] = useState<movieType[]>();
  useEffect(() => {
    dataSource(pag).then((response: movieType[]) => {
      setMovies(response);
      console.log(response);
    });
  }, [dataSource, pag]);

  const base_img = "https://image.tmdb.org/t/p/";
  const size_img = "w500";
  return (
    <Container>
      <div className="cards_container">
        {movies &&
          movies.map((movie: movieType) => (
            <div key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <Card className="card">
                  <Card.Img
                    src={
                      movie.poster_path
                        ? base_img + size_img + movie.poster_path
                        : img_not_found
                    }
                  />
                </Card>
              </Link>
            </div>
          ))}
      </div>
    </Container>
  );
};

export { Cards };
