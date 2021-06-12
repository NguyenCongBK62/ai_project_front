import React, {Component} from "react";
import Sidebar from '../components/Sidebar/Sidebar';
import Dropbox from "../components/Dropbox/Dropbox";
import Profile from '../components/Profile/Profile';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../components/Image/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  input: '',
  imageUrl: '',
  result: '',
  accuracy: 0,
}

class Check extends Component {

  constructor() {
    super();
    this.state = initialState;
  }
  

  onInputChange = (event) => {
    var string = event.target.value;
    // var link_value = string.split("/");
    // var link ='https://drive.google.com/uc?id=' + link_value[5];
    // this.setState({input: link});
    this.setState({input: event.target.value});
  }

  onButtonSubmit = (event) => {
    event.preventDefault();
    this.setState({imageUrl: this.state.input});
    var link = 'http://localhost:5000/predict?image_url=' + this.state.imageUrl;
    fetch(link, {method: 'GET',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }}).then(response => response.json()).then(data => {this.setState(this.setState({result: data.result, accuracy: data.accuracy}))});
  }

  render() {
    const {  imageUrl } = this.state;
    return (
      <div className='page'>
        
        <Row>
          <Col xs={2}><Sidebar/></Col>
          <Col xs={7}>
            <Dropbox
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <Image imageUrl={imageUrl} />
          </Col>
          <Col xs={3}><Profile result={this.state.result} accuracy={this.state.accuracy}/></Col>
        </Row>
        
      </div>
    );
  }
}
export default Check;