import React, { FC, useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { lists } from "../../api/getMovies";
import { movieType } from "../../types/movieType";
import "./styles.css";
interface Props {
  data?: movieType;
  pag: number;
}
const Cards: FC<Props> = ({ pag }) => {
  const [latests, setLatests] = useState<movieType[]>();
  useEffect(() => {
    lists.getLatest(pag).then((response) => {
      setLatests(response);
      console.log(response);
    });
  }, [pag]);

  const base_img = "https://image.tmdb.org/t/p/";
  const size_img = "w500";
  return (
    <Container>
      <h1>cards con los ultimos lanzamientos</h1>
      <div className="cards_container">
        {latests &&
          latests.map((latest: movieType) => (
            <Card className="card">
              <Card.Img
                variant="top"
                src={base_img + size_img + latest.poster_path}
              />
              <Card.Body>
                <Card.Title>{latest.title}</Card.Title>
                <Card.Text>{latest.release_date}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export { Cards };
