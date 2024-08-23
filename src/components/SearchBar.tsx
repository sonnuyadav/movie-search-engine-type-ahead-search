import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FormControl, ListGroup } from 'react-bootstrap';

interface Movie {
    id: number;
    title: string;
    year: number;
  }

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  
    useEffect(() => {
        const fetchMovies = async () => {
          const response = await axios.get<Movie[]>('http://localhost:3001/movies');
          setMovies(response.data);
        };
    
        fetchMovies();
      }, []);
    
      useEffect(() => {
        if (query) {
          const results = movies.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredMovies(results);
        } else {
          setFilteredMovies([]);
        }
      }, [query, movies]);
    
    return (
        <Form>
        <FormControl
          className="mb-3"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {filteredMovies.length > 0 && (
          <ListGroup>
            {filteredMovies.map(movie => (
              <ListGroup.Item key={movie.id}>
                {movie.title} ({movie.year})
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Form>
    );
  };
  
  export default SearchBar;