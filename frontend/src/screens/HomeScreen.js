import React,{useState,useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product/Product";
import axios from 'axios';

const HomeScreen = () => {
  const [productState,setProductState] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          const products = await axios.get('/api/products');
          setProductState(products.data);
      }
      fetchData();
  },[]);
  return (
    <div className="HomeScreen_container">
      <h1>Latest Products</h1>
         <Row>
        {productState.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} xl={3}>
            <Product info={product} size={5} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;

const [a,b] = ["item1","item2"]