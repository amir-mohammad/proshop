import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const Product = ({ info, size }) => {
  return (
    <Card className="my-3 p-3">
      <a href={`/product/${info.id}`}>
        <Card.Img variant="top" src={info.image} />
      </a>
      <Card.Body>
        <Card.Title as="div">{info.name}</Card.Title>
        <Card.Text as="div">{`${info.rating} from ${info.numReviews} reviews`}</Card.Text>
        <Card.Text as="h4">${info.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
Product.defaultProps = {
  size: 2,
};
Product.propTypes = {
  info: PropTypes.object,
  size: PropTypes.number.isRequired,
};
export default Product;
