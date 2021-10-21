import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product/Product";
import products from "../products";
const HomeScreen = () => {
  return (
    <div className="HomeScreen_container">
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} xl={3}>
            <Product info={product} size={5} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
