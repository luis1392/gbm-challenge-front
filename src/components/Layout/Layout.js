import React from "react";

// import Header from ""
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <>
      {/* <Header /> */}

      <main>
        <div>{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
