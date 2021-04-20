import React, { FC } from "react";
import { RouteComponentProps, withRouter, useHistory } from "react-router";

import { Layout, Cards, Paginator } from "../../components";
import { lists } from "../../api/getMovies";

const Popular: FC<RouteComponentProps<{ pag: string & number }>> = ({
  match,
}) => {
  const history = useHistory();
  const page = parseInt(match.params.pag || 1);
  const handleClick = (page: number) => {
    history.push(`/popular/${page}`);
  };
  console.log(page);
  return (
    <Layout>
      <Cards pag={page} dataSource={lists.getPopular} />
      <Paginator
        pag={page}
        onClick={handleClick}
        dataSource={lists.getPopularData}
      />
    </Layout>
  );
};

export default withRouter(Popular);
