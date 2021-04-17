import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { movieType } from "../../types/movieType";
import { lists } from "../../api/getMovies";
import { Header } from "../../components/Layout/components";
import { File } from "./File/index";
const Detail: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const id = match.params.id;
  const [movieFile, setMovieFile] = useState<movieType | undefined>(undefined);
  useEffect(() => {
    lists.getMovieById(id).then((response) => {
      setMovieFile(response);
    });
  }, [id]);
  console.log(movieFile);
  return (
    <>
      <Header />
      {movieFile ? <File movie={movieFile} /> : "Movie not found"}
    </>
  );
};

export { Detail };
