import React, { FC } from "react";
import { Header } from "./components";

interface Props {
  hideHeader?: boolean;
}

const Layout: FC<Props> = ({ children, hideHeader = false }) => {
  return (
    <div className="layout">
      <div className="contenedor">
        {!hideHeader && <Header />}
        {children}
      </div>
    </div>
  );
};

export { Layout };
