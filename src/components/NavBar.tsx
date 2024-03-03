import { Button, Nav, Container, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function NavBar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            <span className="fs-3">Home</span>
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            <span className="fs-3">Store</span>
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            <span className="fs-3">About</span>
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="#CECECE"
          >
            <path d="M31.914 5.4l-2.914 11.6c0 0.139-0.028 0.27-0.078 0.389-0.102 0.24-0.293 0.432-0.532 0.533-0.12 0.051-0.252 0.078-0.39 0.078h-19l0.8 4h17.2c0.553 0 1 0.447 1 1s-0.447 1-1 1h-18c-0.553 0-1-0.447-1-1l-3.8-19h-3.2c-0.552 0-1-0.448-1-1s0.448-1 1-1h4c0.553 0 1 0.448 1 1l0.2 1h24.8c0.553 0 1 0.448 1 1 0 0.143-0.032 0.277-0.086 0.4zM8.6 16h3.4v-10h-5.4l2 10zM18 6h-5v10h5v-10zM24 6h-5v10h5v-10zM25 6v10h2.253l2.533-10h-4.786zM11 26c1.657 0 3 1.344 3 3s-1.343 3-3 3-3-1.344-3-3 1.343-3 3-3zM11 30c0.553 0 1-0.447 1-1s-0.447-1-1-1-1 0.447-1 1 0.447 1 1 1zM25 26c1.657 0 3 1.344 3 3s-1.343 3-3 3-3-1.344-3-3 1.343-3 3-3zM25 30c0.553 0 1-0.447 1-1s-0.447-1-1-1-1 0.447-1 1 0.447 1 1 1z"></path>
          </svg>
          {cartQuantity > 0 && (
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          )}
        </Button>
      </Container>
    </NavbarBs>
  );
}
