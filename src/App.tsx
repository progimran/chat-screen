import "./App.css";
import Container from "./compoents/container";
import Footer from "./compoents/footer";
import Header from "./compoents/header";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <Container />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
