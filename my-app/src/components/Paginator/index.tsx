import React, { FC, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useHistory } from "react-router";
import { GetMoviesResponse, lists } from "../../api/getMovies";
import "./styles.css";
interface Props {
  pag: number;
}

const Paginator: FC<Props> = ({ pag }) => {
  const [saveData, setSaveData] = useState<GetMoviesResponse>();
  const [totalPages, setTotalPages] = useState<number>();

  const [page, setPage] = useState<number>(pag);
  const startPaginationDefault: number = 2;
  const [startPagination, setStartPagination] = useState<number>(2);
  const [endPagination, setEndPagination] = useState<number>();
  const history = useHistory();

  useEffect(() => {
    lists.getLatestData().then((response) => {
      console.log(response);
      setSaveData(response);
      setTotalPages(response.total_pages);
    });
  }, []);

  useEffect(() => {
    setStartPagination(() => {
      return page! > 1 ? page! - 1 : startPaginationDefault;
    });
    setEndPagination(() => {
      return page! <= 1 ? page! + 1 : page;
    });
  }, [page, startPagination]);

  useEffect(() => {
    history.push(`/latest/:${page}`);
  }, [history, page]);

  return (
    <div className="Pagination">
      {Array(saveData?.total_pages)}
      <Pagination>
        <Pagination.Prev
          onClick={() => setPage(page! > 1 ? page! - 1 : page)}
        />
        <Pagination.Item onClick={() => setPage(1)}>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        {Array.from(Array(totalPages).keys())
          .slice(startPagination, endPagination)
          .map((index) => {
            return (
              <Pagination.Item onClick={() => setPage(index)}>
                {index}
              </Pagination.Item>
            );
          })}
        <Pagination.Ellipsis />
        <Pagination.Item onClick={() => setPage(totalPages!)}>
          {totalPages}
        </Pagination.Item>
        <Pagination.Next
          onClick={() => setPage(page! < totalPages! ? page! + 1 : page)}
        />
      </Pagination>
    </div>
  );
};

export { Paginator };
