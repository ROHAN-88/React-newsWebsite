import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
const Navbar2 = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        position: "fixed",
        top: "0",
        // right: "0",
        width: "100%",
        left: "0",
        zIndex: "999",
      }}
    >
      <Container fluid style={{ background: "Purple" }}>
        <Navbar.Brand href="#" className="navbar-textColor  ">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0  ">
            {/* //?home */}
            <Nav.Link
              href="/sale"
              className="navbar-textColor m-auto"
              style={{
                width: "60px",
                textAlign: "center",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/sale"
              className="navbar-textColor m-auto"
              style={{
                width: "60px",
                textAlign: "center",
              }}
            >
              About
            </Nav.Link>

            <Nav.Link
              href="/sale"
              className="navbar-textColor m-auto"
              style={{
                width: "60px",
                textAlign: "center",
              }}
            >
              BUY
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
