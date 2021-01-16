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
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <Button variant="primary">Add</Button>
        </Card.Body>
      </Card>
    </>
  );
}
