import {ADD_TO_CART} from '../constant/cart';

export const cartReducer = (state = { cartItems:[] },action) => {
    switch(action.type){
        case ADD_TO_CART:{
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);
            if(existItem){
                return {
                    ...state,
                    cartItems:state.cartItems.map(x => x.product === item.product ? item : x)
                }
            }else{
              return{
                ...state,
                cartItems:[...state.cartItems,item]
              }  
            }
        }
        default:
            return state
    }
}