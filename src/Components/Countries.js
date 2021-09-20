import { useEffect, useState } from "react";
import Country from "./Country/Country";
import "./Countries";
import "./Countries.css";

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

      <div className="country-area">
        {countries.map(country => (
          <Country country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
}

export default Countries;
