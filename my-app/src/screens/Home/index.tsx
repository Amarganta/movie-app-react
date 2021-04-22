import React, { FC } from "react";
import { lists } from "../../api";
import {
  MovieCarousel,
  Rows,
  Header,
  Footer,
} from "../../components/Layout/components";
import "./styles.css";

const Home: FC = () => {
  return (
    <div className="home">
      <Header />
      <MovieCarousel />
      <Rows dataSource={lists.getPopular} title={"Popular movies"} />
      <Rows dataSource={lists.getTopRated} title={"Top Rated Movies"} />
      <Footer />
    </div>
  );
};
export { Home };
