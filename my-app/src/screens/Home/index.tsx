import React, { FC } from "react";
import {
  HomeCarousel,
  HomeRows,
  Header,
  Footer,
} from "../../components/Layout/components";
import "./styles.css";

const Home: FC = () => {
  return (
    <div className="home">
      <Header />
      <HomeCarousel />
      <HomeRows />
      <Footer />
    </div>
  );
};
export { Home };
