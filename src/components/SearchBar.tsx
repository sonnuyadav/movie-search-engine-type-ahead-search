import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

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