import React, { FC, useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { movieType } from "../../types/movieType";
import img_not_found from "../../assets/img/not_img.png";
import "./styles.css";
interface Props {
  data?: movieType;
  pag: number;
  dataSource: Function;
}
const Cards: FC<Props> = ({ pag, dataSource }) => {
  const [latests, setLatests] = useState<movieType[]>();
  useEffect(() => {
    dataSource(pag).then((response: movieType[]) => {
      setLatests(response);
      console.log(response);
    });
  }, [dataSource, pag]);

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
                src={
                  latest.poster_path
                    ? base_img + size_img + latest.poster_path
                    : img_not_found
                }
              />
            </Card>
          ))}
      </div>
    </Container>
  );
};

export { Cards };
