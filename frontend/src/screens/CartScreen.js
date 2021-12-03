import React, { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from "../actions/cartAction";


const CartScreen = ({match,location}) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  const qty = location.search ? location.search.split('=')[1] : 1;

  useEffect(() => {
    if(id){
        dispatch(addToCart(id,qty))
    }
  })
  return (
  <h1>Shopping Cart</h1>
  );
};

export default CartScreen;
