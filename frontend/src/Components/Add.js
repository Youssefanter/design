import { Button, Form } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";

export default function Add() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" placeholder="Enter Brand" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Color</Form.Label>
              <Form.Control type="text" placeholder="Enter Color" />
            </Form.Group>
          </Form>
          <Button variant="primary">Add</Button>
        </Card.Body>
      </Card>
    </>
  );
}
