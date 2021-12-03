import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS
} from "../constant/products";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload,products:[] };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product:{ reviews : []} },action) => {
  switch(action.type){
    case PRODUCT_DETAILS_REQUEST:
      return {loading:true,...state}

    case PRODUCT_DETAILS_SUCCESS:
      return {...state,loading:false,product:action.payload}  

    case PRODUCT_DETAILS_FAIL:
      return {...state,loading:false,product:{reviews:[]},error:action.payload}  

    default:
      return state  
  }
}


