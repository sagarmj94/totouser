import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetch from "isomorphic-fetch";
import Loader from "./Loader";
function CardUser() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((data) => setTodos(data));
  // }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false); // Set isLoading to false after data is fetched
      });
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
        {isLoading ? (
          <Loader />
        ) : (
          <Row>
            {todos?.map((todo) => (
              <Col key={todo.id} xs={12} lg={4} xlg={4} md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>Title:- {todo.title}</Card.Title>
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
        )}
      </Container>
    </>
  );
}

export default CardUser;
