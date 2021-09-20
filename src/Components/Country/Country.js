import "./Country.css";

function Country(props) {
  let { name, flag, capital, population } = props.country;
  return (
    <div className="country">
      <h2> Name : {name}</h2>
      <img src={flag} alt="" />
      <p>Capital : {capital}</p>
      <p>Population : {population}</p>
    </div>
  );
}
export default Country;
