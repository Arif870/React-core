import "./App.css";
import Countries from "./Components/Countries";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu />

      <Countries />
      <Footer />
    </div>
  );
}

export default App;
