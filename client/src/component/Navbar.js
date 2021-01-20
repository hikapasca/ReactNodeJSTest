import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const NavbarPage = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <Navbar style={{ backgroundColor: "#2B7FC3" }}>
      <Navbar.Brand href="/" style={{ padding: 0, margin: 0 }}>
        <Navbar.Text
          style={{ color: "white", fontWeight: "1000", fontSize: "25px" }}
        >
          GitHub
        </Navbar.Text>
        <Navbar.Text style={{ color: "white", fontSize: "25px" }}>
          Jobs
        </Navbar.Text>
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <div style={{ float: "right", right: "0" }}>
        <Button onClick={(e) => logout(e)} variant="secondary">
          Logout
        </Button>
      </div>
    </Navbar>
  );
};

export default NavbarPage;
