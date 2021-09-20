import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Countries />
    </div>
  );
}

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Travelling around the world !!</h1>
      <p>Total Countries Found : {countries.length}</p>
    </div>
  );
}
export default App;
