import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <>
    <Header />
    <Container>
      <h1 className="my-4">Movie Search Engine</h1>
      <SearchBar />
    </Container>
    </>
  );
}

export default App;
