import React, { FC, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { GetMoviesResponse } from "../../api/getMovies";
import "./styles.css";
interface Props {
  pag: number;
  onClick: Function;
  dataSource: Function;
}

const Paginator: FC<Props> = ({ pag, onClick, dataSource }) => {
  const [saveData, setSaveData] = useState<GetMoviesResponse>();
  const [totalPages, setTotalPages] = useState<number>();

  const [page, setPage] = useState<number>(pag);
  const startPaginationDefault: number = 1;
  const [startPagination, setStartPagination] = useState<number>(2);
  const [endPagination, setEndPagination] = useState<number>();

  useEffect(() => {
    dataSource().then((response: GetMoviesResponse) => {
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

  const handleOnClick = (page: number) => {
    // history.push(`/latest/${page}`);
    onClick(page);
    setPage(page);
    window.scrollTo(0, 0);
  };
  return (
    <div className="Pagination">
      {Array(saveData?.total_pages)}
      <Pagination>
        <Pagination.Prev
          onClick={() => handleOnClick(page! > 1 ? page! - 1 : page)}
        />
        <Pagination.Item onClick={() => handleOnClick(1)}>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        {Array.from(Array(totalPages).keys())
          .slice(startPagination, endPagination)
          .map((index) => {
            return (
              <Pagination.Item onClick={() => handleOnClick(index)}>
                {index}
              </Pagination.Item>
            );
          })}
        <Pagination.Ellipsis />
        <Pagination.Item onClick={() => handleOnClick(totalPages!)}>
          {totalPages}
        </Pagination.Item>
        <Pagination.Next
          onClick={() => handleOnClick(page! < totalPages! ? page! + 1 : page)}
        />
      </Pagination>
    </div>
  );
};

export { Paginator };
