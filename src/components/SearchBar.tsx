import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
interface Movie {
    id: number;
    title: string;
    year: number;
  }

const SearchBar: React.FC = () => {
    const [selected, setSelected] = useState<Movie[]>([]);
    const [movies, setMovies] = useState<Movie[]>([]);
   
    useEffect(() => {
        const fetchMovies = async () => {
          const response = await axios.get<Movie[]>('http://localhost:3001/movies');
          setMovies(response.data);
        };
    
        fetchMovies();
      }, []);
    
      return (
        <Typeahead
          id="movie-typeahead"
          labelKey="title"
          multiple
          options={movies}
          placeholder="Choose a movie..."
          selected={selected}
          onChange={(selected) => setSelected(selected as Movie[])}
        />
      );
    
  };
  
  export default SearchBar;