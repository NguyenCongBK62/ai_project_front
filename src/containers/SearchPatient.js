import React from "react";
import Sidebar from '../components/Sidebar/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../components/Search/Search';

function SearchPatient() {
  return (
    <div className='page'>
      
      <Row>
        <Col xs={2}><Sidebar/></Col>
        <Col xs={10}><Search/></Col>
      </Row>
      
    </div>
  );
}

export default SearchPatient;