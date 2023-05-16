import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/logo.png";
import searchIcon from "../assets/images/searchIcon.png";
import devider from "../assets/images/devider.png";
import FillBag from "../assets/images/FillBag.svg";
import "./navigation.css";

function Navigation() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          display: "flex",
          background: "#FFFFFF",
          boxShadow:
            "0px 2px 10px rgba(216, 216, 216, 0.4), 0px -2px 10px rgba(216, 216, 216, 0.5)",
          height: "86px",
        }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <Navbar.Brand href="#home">
              <img src={Logo} alt="logo" />
            </Navbar.Brand>
          </div>
          <div>
            <Nav
              className="me-auto"
              style={{ display: "flex", gap: "40px", color: "black" }}
            >
              <Nav.Link href="#home" className="nav-link">
                Home
              </Nav.Link>

              <Nav.Link href="#features" className="nav-link">
                About
              </Nav.Link>

              <Nav.Link href="#pricing" className="nav-link">
                Menu
              </Nav.Link>

              <Nav.Link href="#pricing" className="nav-link">
                Rewards
              </Nav.Link>

              <Nav.Link href="#pricing" className="nav-link">
                Deals
              </Nav.Link>

              <Nav.Link href="#pricing" className="nav-link">
                Brands
              </Nav.Link>
            </Nav>
          </div>
          <div>
            <Nav.Link href="#pricing">
              <img src={searchIcon} alt="logo" />
            </Nav.Link>
          </div>

          <Nav.Link href="#pricing">
            <img src={devider} alt="logo" />
          </Nav.Link>

          <Nav.Link
            href="#pricing"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "48px",
              height: "40px",
              borderRadius: "10px",
              background: "#227840",
              boxShadow:
                "0px 2px 10px rgba(216, 216, 216, 0.5), 0px -2px 10px rgba(216, 216, 216, 0.5)",
            }}
          >
            <img src={FillBag} alt="logo" />
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
