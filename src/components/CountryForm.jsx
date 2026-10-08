import { useState } from "react";
import { Country, State } from "country-state-city";

function CountryForm() {
  const [country, setCountry] = useState("");

  const countries = Country.getAllCountries();

  const states = country
    ? State.getStatesOfCountry(country)
    : [];

  return (
    <div>
      <h1>Country and State</h1>

      {/* Country */}
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        <option value="">Select Country</option>

        {countries.map((item) => (
          <option key={item.isoCode} value={item.isoCode}>
            {item.name}
          </option>
        ))}
      </select>

      <br />
      <br />

      {/* State */}
      <select disabled={!country}>
        <option value="">Select State</option>

        {states.map((item) => (
          <option key={item.isoCode} value={item.isoCode}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountryForm;