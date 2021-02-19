import React, { useEffect } from "react";
import { Header, Footer } from "../components";

const Index = () => {
  useEffect(() => {
    document.title = "Jean Karlo Obando";
  }, []);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Index;
