import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetch from "isomorphic-fetch";
function CardUser() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <>
      <h1
        style={{
          padding: "10px 10px 40px 10px",
          alignItem: "center",
          textAlign: "center",
        }}
      >
        User App
      </h1>
      <Container style={{ background: "grey", paddingTop: "20px" }}>
        <Row>
          {todos?.map((todo) => (
            <Col key={todo.id} xs={12} lg={4} xlg={4} md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{todo.title}</Card.Title>
                  <Card.Text>
                    {todo.completed ? (
                      <p style={{ color: "green" }}>Completed</p>
                    ) : (
                      <p style={{ color: "red" }}>Not completed</p>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CardUser;
