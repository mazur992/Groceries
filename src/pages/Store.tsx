import storeItems from "../data/item.json";
import { StoreItem } from "../components/StoreItem";
import { Row, Col } from "react-bootstrap";

export function Store() {
  return (
    <>
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
        Store
      </h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
