import React, { FC } from "react";
import { RouteComponentProps, withRouter, useHistory } from "react-router";

import { Layout, Cards, Paginator } from "../../components";
import { lists } from "../../api/getMovies";

const Upcoming: FC<RouteComponentProps<{ pag: string & number }>> = ({
  match,
}) => {
  const history = useHistory();
  const page = parseInt(match.params.pag || 1);
  const handleClick = (page: number) => {
    history.push(`/upcoming/${page}`);
  };
  console.log(page);
  return (
    <Layout>
      <Cards pag={page} dataSource={lists.getUpcoming} />
      <Paginator
        pag={page}
        onClick={handleClick}
        dataSource={lists.getUpcomingtData}
      />
    </Layout>
  );
};

export default withRouter(Upcoming);
