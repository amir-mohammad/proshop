import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AboutUs from "./screens/AboutUs";
import CartScreen from "./screens/CartScreen";
import SingInScreen from "./screens/SingInScreen";
import ProductScreen from "./screens/ProductScreen";
// use className insted of class
// use htmlFor insted of for in label
// <img src="" /> <input />
// return only one parent
function App() {
  return (
    <Router>
      <Header />
      <main className="wrapper pt-4">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/signin" component={SingInScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}
export default App;
