import React from "react";

const ProductScreen = (props) => {
  return <div>product {props.match.params.id}</div>;
};

export default ProductScreen;
