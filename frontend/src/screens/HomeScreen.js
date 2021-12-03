import React,{useState,useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product/Product";
import {useDispatch,useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';
import Loader from "../components/Loader/Loader";
import Message from "../components/Message/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {loading,products,error} = useSelector(state => state.productList)
  useEffect(() => {
     dispatch(listProducts());
  },[]);


  return (
  
    <div className="HomeScreen_container">
      <h1>Latest Products</h1>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
           <Row>
           {products.map((product) => (
             <Col key={product.id} xs={12} sm={6} md={4} xl={3}>
               <Product info={product} size={5} />
             </Col>
           ))}
         </Row>

      )}
        
    </div>
  );
};

export default HomeScreen;

