import React from 'react';
import './Dropbox.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Dropbox = ({ onInputChange, onButtonSubmit}) => {
  return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon3">
            Input image URL
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="basic-url" aria-describedby="basic-addon3" onChange={onInputChange}/>
        <Button variant="primary" onClick={onButtonSubmit}>Submit</Button>
      </InputGroup>
  );
} 

export default Dropbox;