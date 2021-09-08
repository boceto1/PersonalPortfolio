import React, { useEffect } from 'react';
import { Header, Content, Footer } from '../components';

const Index = () => {
  useEffect(() => {
    document.title = 'Jean Karlo Obando';
  }, []);
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default Index;
