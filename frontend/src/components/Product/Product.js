import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";
const Product = ({ info, size }) => {
  return (
    <Card className="my-3 p-3">
      <Link to={`/product/${info.id}`}>
        <Card.Img variant="top" src={info.image} />
      </Link>
      <Card.Body>
        <Card.Title as="div">{info.name}</Card.Title>
        <Card.Text as="div" className="my-2">
          <Rating value={info.rating} numReviews={info.numReviews} />
        </Card.Text>
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
