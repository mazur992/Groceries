import { Col, Container, Row } from "react-bootstrap";

export function About() {
  return (
    <div>
      <h1
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          border: "0",
          padding: "0",
          whiteSpace: "nowrap",
          clipPath: "inset(100%)",
        }}
      >
        About
      </h1>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>Welcome to Our Online Market</h2>
            <p>
              Welcome to our online market with home delivery, where your
              comfort and satisfaction are our priority! We strive to make your
              online shopping experience as convenient and enjoyable as
              possible.
            </p>
            <p>
              Our market offers a wide range of fresh products that you can
              conveniently order from anywhere. What makes us special? Here are
              a few advantages you get when choosing us:
            </p>
            <ul>
              <li>
                Freshness of products: We guarantee that every product you
                receive will be fresh and of high quality.
              </li>
              <li>
                Affordable prices: Our mission is to provide affordable prices
                for all our customers.
              </li>
              <li>
                Convenient delivery: Forget about queues in stores and heavy
                bags! We will deliver your order right to your door at a
                convenient time for you.
              </li>
            </ul>
            <p>
              Make your life easier and more enjoyable with our online market
              with home delivery. Choose quality, convenience, and affordable
              prices - choose us!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
