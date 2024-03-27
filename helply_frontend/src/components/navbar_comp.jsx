import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <div className=" w-full h-20 py-3">
      {/* {" "} */}
      {/* Adding background color to the entire Navbar */}
      {/* <Container fluid> */}
      {/* {" "} */}
      {/* Using fluid container to make it full-width */}
      <Navbar
        collapseOnSelect
        expand="lg"
        className=" w-full bg-white drop-shadow-lg"
      >
        <Container>
          <Navbar.Brand href="/" className="text-teal-600 px-3">
            <img src={logo} alt="heyy" className="drop-shadow-md" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/" className="text-teal-600 px-3">
                Home
              </Nav.Link>

              <Nav.Link
                href="/uploadopportunities"
                className="text-teal-600 px-3"
              >
                Upload Opertunities
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-teal-600 px-3">
                Pricing
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-teal-600 px-3">
                Pricing
              </Nav.Link>
              <Nav.Link href="#deets" className="text-teal-600 px-3">
                More deets
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                className="text-teal-600 px-3"
              >
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </Container> */}
    </div>
  );
}

export default NavBarComponent;
