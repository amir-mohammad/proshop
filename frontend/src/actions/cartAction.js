import { ADD_TO_CART } from "../constant/cart";
import axios from 'axios';


export const addToCart = (id,qty) => async (dispatch,getState) => {
    const {data} = await axios.get(`/api/products/${id}`);
    dispatch({
        type:ADD_TO_CART,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            qty
        }

       
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}