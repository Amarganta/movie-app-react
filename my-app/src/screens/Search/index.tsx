import React, { FC, useState, ChangeEvent } from "react";
import { Card, Container, InputGroup, FormControl } from "react-bootstrap";
import { api } from "../../api";
import { movieType } from "../../types/movieType";
import { Layout } from "../../components";
import { Link, useHistory } from "react-router-dom";
import img_not_found from "../../assets/img/not_img.png";
import "./style.css";
const Search: FC = () => {
  const [search, setSearch] = useState<movieType[]>();
  const [typedSearch, setTypedSearch] = useState("");
  const history = useHistory();
  const getSearch = async (typedSearch: string): Promise<movieType[]> => {
    const { data } = await api.get("search/movie?query=" + typedSearch);
    console.log(data.results);
    setSearch(data.results);
    return data.results;
  };

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setTypedSearch(e.target.value);
    getSearch(typedSearch);
    history.push(`/search/${e.currentTarget.value}`);
  }

  const base_img = "https://image.tmdb.org/t/p/";
  const size_img = "w500";

  return (
    <Layout>
      <Container>
        <div>
          <InputGroup className="mb-3 mt-3">
            <FormControl
              name="input-search"
              className="input_search"
              id="buscador"
              value={typedSearch}
              onChange={onChange}
              placeholder="type the movie name here..."
            />
          </InputGroup>
          <div className="cards_container">
            {search &&
              search.map((movie: movieType) => (
                <div className="card">
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
        </div>
      </Container>
    </Layout>
  );
};

export { Search };
