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
    console.log(response)
    // this.setState({ person: data.Body[0], loading: false });
  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...test</div>
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
