import { useEffect, useState } from "react";
import "./Countries";

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

      <div>
        {countries.map(country => (
          <Country
            name={country.name}
            capital={country.capital}
            key={country.name}
          />
        ))}
      </div>
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h2> Name : {props.name}</h2>
      <p>Capital : {props.capital}</p>
    </div>
  );
}
export default Countries;
