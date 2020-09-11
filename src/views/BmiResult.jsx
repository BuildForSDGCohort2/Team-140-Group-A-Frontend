

// THE COMPONENT IS UNUSED YET, I'M STILL YET TO HAVE FULL KNOWLEDGE ON THE USE OF PROPS



import React, { Component } from 'react';
import {Button, Modal} from "react-bootstrap";

class BmiResultPopup extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleModal = () => {
    this.setState({show: !this.state.show});
  };
  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.show} onHide={()=>{this.handleModal()}}>
          <Modal.Header closeButton >The Modal Header</Modal.Header>
          <Modal.Body>The Modal Body</Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.handleModal();
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Button
          onClick={() => {
            this.handleModal();
          }}
        >
          Button
        </Button>
      </React.Fragment>
    );
  }
}
 
export default BmiResultPopup;