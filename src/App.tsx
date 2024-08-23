import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <h1 className="my-4">Movie Search Engine</h1>
      <SearchBar />
    </Container>
  );
}

export default App;
