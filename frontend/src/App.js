import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
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
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}
export default App;
