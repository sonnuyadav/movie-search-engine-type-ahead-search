import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FormControl, ListGroup } from 'react-bootstrap';

interface Movie {
    id: number;
    title: string;
    year: number;
  }

const SearchBar: React.FC = () => {
   
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