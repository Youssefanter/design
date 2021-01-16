import React from "react";
import { ListGroup } from "react-bootstrap";

export default class Display extends React.Component {
  state = {
    loading: true,
    person: null,
  };
  async componenDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
            <ListGroup>
              <ListGroup.Item>{this.state.person.name.title}</ListGroup.Item>
              <ListGroup.Item>{this.state.person.name.first}</ListGroup.Item>
              <ListGroup.Item>{this.state.person.name.last}</ListGroup.Item>
            </ListGroup>
          </div>
        )}
      </div>
    );
  }
}
