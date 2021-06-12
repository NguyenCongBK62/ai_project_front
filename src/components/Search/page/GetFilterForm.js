import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

GetFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

GetFilterForm.defaultProps = {
    onSubmit: null,
}

function GetFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState({name: '', idno: '', planeid: ''});
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        if(!onSubmit) return;

        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(()=> {
            const formSubmit = {
                searchTerm,
            }
            onSubmit(formSubmit);
        }, 1000)
        
    }
    function handleSearchTermNameChange(e) {
        const value = e.target.value;
        setSearchTerm({...searchTerm,name: value});

        

    }
    function handleSearchTermIdnoChange(e) {
        const value = e.target.value;
        setSearchTerm({...searchTerm,idno: value});

        
    }
    function handleSearchTermPlaneidChange(e) {
        const value = e.target.value;
        setSearchTerm({...searchTerm,planeid: value});

        
    }
    return (
        <Form inline className='form_search' onChange = {handleSearchTermChange}>
            <Form.Group>
                <Form.Label column="sm" sm="1">
                    <strong>Full name</strong>
                </Form.Label>
                <Col sm="2">
                    <input size="sm" type="text" value={searchTerm.name} onChange={handleSearchTermNameChange} />
                </Col>
            </Form.Group>
            <Form.Group>
                <Form.Label column="sm" sm="1">
                    <strong>ID numble</strong>
                </Form.Label>
                <Col sm="2">
                    <Form.Control size="sm" type="text" value={searchTerm.idno} onChange={handleSearchTermIdnoChange} />
                </Col>
            </Form.Group>
            <Form.Group>
                <Form.Label column="sm" sm="1">
                    <strong>Date</strong>
                </Form.Label>
                <Col sm="2">
                    <Form.Control size="sm" type="text" value={searchTerm.planeid} onChange={handleSearchTermPlaneidChange} />
                </Col>
            </Form.Group>
            <Button type="submit" >Search</Button>
        </Form>
    );
}

export default GetFilterForm;