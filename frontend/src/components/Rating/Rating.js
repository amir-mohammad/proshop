import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const Rating = ({ value, numReviews }) => {
  return (
    <>
      {value >= 1 ? (
        <FaStar color="#f5bc04" size={15} />
      ) : value >= 0.5 ? (
        <FaStarHalfAlt color="#f5bc04" size={15} />
      ) : (
        <FaRegStar color="#f5bc04" size={15} />
      )}
      {value >= 2 ? (
        <FaStar color="#f5bc04" size={15} />
      ) : value >= 1.5 ? (
        <FaStarHalfAlt color="#f5bc04" size={15} />
      ) : (
        <FaRegStar color="#f5bc04" size={15} />
      )}
      {value >= 3 ? (
        <FaStar color="#f5bc04" size={15} />
      ) : value >= 2.5 ? (
        <FaStarHalfAlt color="#f5bc04" size={15} />
      ) : (
        <FaRegStar color="#f5bc04" size={15} />
      )}
      {value >= 4 ? (
        <FaStar color="#f5bc04" size={15} />
      ) : value >= 3.5 ? (
        <FaStarHalfAlt color="#f5bc04" size={15} />
      ) : (
        <FaRegStar color="#f5bc04" size={15} />
      )}
      {value >= 5 ? (
        <FaStar color="#f5bc04" size={15} />
      ) : value >= 4.5 ? (
        <FaStarHalfAlt color="#f5bc04" size={15} />
      ) : (
        <FaRegStar color="#f5bc04" size={15} />
      )}
    </>
  );
};

export default Rating;
