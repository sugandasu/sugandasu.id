import React from "react";
import "../styles/main.css";
import Header from "./Header";

const MainLayout = ({ pageTitle = "", children }) => {
  return (
    <div>
      <title>{pageTitle ? pageTitle + " |" : null} Arif Suganda</title>
      <Header />
      <main id="main" className="container main">
        <main>{children}</main>
      </main>
    </div>
  );
};

export default MainLayout;
