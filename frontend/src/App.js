import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
// use className insted of class
// use htmlFor insted of for in label
// <img src="" /> <input />
// return only one parent
function App() {
  return (
    <>
      <Header />
      <main className="wrapper pt-4">
        <Container>
          <h1>Latest Products</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}
export default App;
