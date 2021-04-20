import React, { FC } from "react";
import { RouteComponentProps, withRouter, useHistory } from "react-router";

import { Layout, Cards, Paginator } from "../../components";
import { lists } from "../../api/getMovies";

const Latest: FC<RouteComponentProps<{ pag: string & number }>> = ({
  match,
}) => {
  const history = useHistory();
  const page = parseInt(match.params.pag || 1);
  const handleClick = (page: number) => {
    history.push(`/latest/${page}`);
  };
  console.log(page);
  return (
    <Layout>
      <Cards pag={page} dataSource={lists.getLatest} />
      <Paginator
        pag={page}
        onClick={handleClick}
        dataSource={lists.getLatestData}
      />
    </Layout>
  );
};

export default withRouter(Latest);
