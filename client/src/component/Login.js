import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { loginUser } from "../store/action/userAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = ({ data }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = (e) => {
    e.preventDefault();
    const login = {
      username,
      password,
    };
    dispatch(loginUser(login, history));
  };
  return (
    <div>
      <Container>
        <div
          className="shadow"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "100px",
            width: "50%",
            padding: "70px",
            backgroundColor: "#41B3A3",
            borderRadius: "40px",
            textAlign: "left",
          }}
        >
          <Form onSubmit={(e) => loginHandler(e)}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => usernameHandler(e)}
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => passwordHandler(e)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Login
            </Button>
            <Form.Text>
              Didn't have accout?, <a href="/register">click here</a>
            </Form.Text>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
