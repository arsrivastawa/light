import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Container({ children }) {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {children}
      </main>

      <Footer />
    </>
  );
}


export default Container;
