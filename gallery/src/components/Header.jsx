import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="m-auto">
          PixelPerfect
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
