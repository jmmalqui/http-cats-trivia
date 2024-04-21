import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Disclaimer from "./components/Body/Disclaimer";

function App() {
  return (
    <>
      <div className="box">
        <Header></Header>
        <Disclaimer></Disclaimer>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
