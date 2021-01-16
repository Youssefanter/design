import React from "react";
import { ListGroup } from "react-bootstrap";

export default class Display extends React.Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    const url = "http://127.0.0.1:8000/api/model";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data[3], loading: false });
  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...test</div>
        ) : (
          <div>
            <ListGroup>
              <ListGroup.Item>{this.state.person.name}</ListGroup.Item>
              <ListGroup.Item>{this.state.person.color}</ListGroup.Item>
              <ListGroup.Item>{this.state.person.brand}</ListGroup.Item>
            </ListGroup>
          </div>
        )}
      </div>
    );
  }
}
