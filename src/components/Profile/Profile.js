import React, {Component} from 'react';
import './Profile.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          address: '',
          idNo: '',
          planeId: '',
          show: false,
        }
    }


    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    
    onAddressChange = (event) => {
        this.setState({address: event.target.value})
    }
    
    onIdNoChange = (event) => {
        this.setState({idNo: event.target.value})
    }

    onPlaneIdChange = (event) => {
        this.setState({planeId: event.target.value})
    }

    handleClose = () => this.setState({show: false});
    
    onSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3001/profileinput', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: this.state.name,
            address: this.state.address,
            idNo: this.state.idNo,
            planeId: this.state.planeId
          })
        })
        .then(response => response.json()).then(data => {
            if(this.state.name !== ''){
                this.setState({show: true});
            }   
        });
    }    

    render(){
        return (
            <div className='profile'>
                <strong>SUBJECT PROFILE</strong>
                <Form className = 'form_profile' >
                    <Form.Group as={Row} id="field">
                        <Form.Label column="sm" sm="5">
                        <strong>Full name</strong>
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control size="sm" type="text" name='name' onChange={this.onNameChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} id="field">
                        <Form.Label column="sm" sm="5">
                        <strong>Address</strong>
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control size="sm" type="text" name='address' onChange={this.onAddressChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} id="field">
                        <Form.Label column="sm" sm="5">
                        <strong>ID number</strong>
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control size="sm" type="text" name='idNo' onChange={this.onIdNoChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} id="field">
                        <Form.Label column="sm" sm="5">
                        <strong>ID plane</strong>
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control size="sm" type="text" name='planeId' onChange={this.onPlaneIdChange}/>
                        </Col>
                    </Form.Group>
                    <Button type="submit" className="submit-button" onClick={this.onSubmit}>Save</Button>
                    <Button as="input" type="reset" value="Make blank" className="reset-button"/>
                </Form>
                <strong>RESULT</strong>
                <div className="result">
                    Diagnostic : {this.props.result}
                    <br></br>
                    Accuracy : {this.props.accuracy}%
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton >
                        <Modal.Title >SUBJECT PROFILE SAVED</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modal-content-1'> 
                            <Row style={{margin: '2rem 1rem'}}>
                                <Col sm='4' ><p style={{float: 'right'}}>Name:</p></Col>
                                <Col sm='8'>{this.state.name}</Col>
                            </Row>
                            <Row style={{margin: '2rem 1rem'}}>
                                <Col sm='4' ><p style={{float: 'right'}}>Address:</p></Col>
                                <Col sm='8'>{this.state.address}</Col>
                            </Row>
                            <Row style={{margin: '2rem 1rem'}}>
                                <Col sm='4' ><p style={{float: 'right'}}>Id number:</p></Col>
                                <Col sm='8'>{this.state.idNo}</Col>
                            </Row>
                            <Row style={{margin: '2rem 1rem'}}>
                                <Col sm='4' ><p style={{float: 'right'}}>Id plane:</p></Col>
                                <Col sm='8'>{this.state.planeId}</Col>
                            </Row>
                            <Row style={{margin: '2rem 1rem'}}>
                                <Col sm='4'><p style={{float: 'right'}}>Diagnostic:</p></Col>
                                <Col sm='8'>{this.props.result}</Col>
                            </Row>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="reset-button" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Profile;