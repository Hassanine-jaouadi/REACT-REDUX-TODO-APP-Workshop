import React, { Component } from "react";
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addItem } from "../js/actions/actionTask";

class AddItems extends Component {
  state = {
    input: ""
  };
  handlChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  add = e => {
    e.preventDefault();
    this.props.addItem({
      // why this.props?
      id: Date.now(),
      text: this.state.input,
      isComplete: false
    });
    this.setState({
      // why we make the input empty?
      input: ""
    });
  };

  render() {
    return (
      <Card bg="primary">
        <Card.Body>
          <h1 className={"text-white"}>To-Do-App !</h1>
          <Form>
            <Form.Group>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={this.state.input}
                  onChange={this.handlChange}
                />
                <InputGroup.Append>
                  <Button variant="success" onClick={this.add}>
                    +
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

// mapDispatchToProps is used for dispatching actions to the store.
//Dispatches an action. This is the only way to trigger a state change.

const MapDispatchToProps = {
  addItem
};

//The connect() function connects a React component to a Redux store.
//It provides its connected component with the pieces of the data it needs from the store ("mapStateToProps"),
//  and the functions it can use to dispatch actions to the store ("mapDispatchToProps").
// If you don't want to subscribe to store updates, pass null or undefined in place of "mapStateToProps".
export default connect(null, MapDispatchToProps)(AddItems);
