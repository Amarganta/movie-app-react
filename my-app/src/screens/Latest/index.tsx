import React, { FC } from "react";
import { Layout, Cards, Paginator } from "../../components";
import { RouteComponentProps } from "react-router";

const Latest: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {
  const page = parseInt(match.params.pag);
  return (
    <Layout>
      <Cards pag={page} />
      <Paginator pag={page} />
    </Layout>
  );
};

export { Latest };
