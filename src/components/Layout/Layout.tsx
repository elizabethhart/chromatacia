import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Layout.scss";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="layoutPane">
      <Navigation />
    </div>
  );
};

export default Layout;
