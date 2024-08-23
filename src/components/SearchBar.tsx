import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FormControl, ListGroup } from 'react-bootstrap';

interface Movie {
    id: number;
    title: string;
    year: number;
  }

const SearchBar: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
          const response = await axios.get<Movie[]>('http://localhost:3001/movies');
          setMovies(response.data);
        };
    
        fetchMovies();
      }, []);
    
      console.log(movies);
    
    return (
      <Form>
        <FormControl
          type="text"
          placeholder="Search movies..."
          value=''
          
        />
      </Form>
    );
  };
  
  export default SearchBar;