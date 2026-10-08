import { Country, State, City } from "country-state-city";

function BusinessAddress({ address, setAddress }) {
  const updateField = (field, value) => {
    setAddress((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // Get all countries
  const countries = Country.getAllCountries();

  // Get states based on selected country
  const states = address.country
    ? State.getStatesOfCountry(address.country)
    : [];

  // Get cities based on selected country and state
  const cities =
    address.country && address.state
      ? City.getCitiesOfState(address.country, address.state)
      : [];

  return (
    <div className="space-y-2 sm:space-y-2.5">

      {/* Country */}
      <select
        value={address.country}
        onChange={(e) => {
          const countryCode = e.target.value;

          setAddress((previous) => ({
            ...previous,
            country: countryCode,
            state: "",
            city: "",
          }));
        }}
        className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
      >
        <option value="">Select country</option>

        {countries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>

      {/* Address Line 1 */}
      <input
        type="text"
        placeholder="Address line 1"
        value={address.line1}
        onChange={(e) => updateField("line1", e.target.value)}
        className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
      />

      {/* Address Line 2 */}
      <input
        type="text"
        placeholder="Address line 2"
        value={address.line2}
        onChange={(e) => updateField("line2", e.target.value)}
        className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
      />

      {/* State, City, Zipcode */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[95px_1fr_95px]">

        {/* State */}
        <select
          value={address.state}
          onChange={(e) => {
            const stateCode = e.target.value;

            setAddress((previous) => ({
              ...previous,
              state: stateCode,
              city: "",
            }));
          }}
          disabled={!address.country}
          className="h-[40px] rounded-md border border-gray-200 bg-white px-2 text-xs text-gray-700 outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-400 sm:h-[42px] sm:rounded-lg sm:px-3 sm:text-sm"
        >
          <option value="">State</option>

          {states.map((state) => (
            <option key={state.isoCode} value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>

        {/* City */}
        <select
          value={address.city}
          onChange={(e) => updateField("city", e.target.value)}
          disabled={!address.state}
          className="h-[40px] rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-400 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
        >
          <option value="">Select city</option>

          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        {/* Zipcode */}
        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          placeholder="Zipcode"
          value={address.zipcode}
          onChange={(e) =>
            updateField(
              "zipcode",
              e.target.value.replace(/\D/g, "")
            )
          }
          className="h-[40px] rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
        />
      </div>
    </div>
  );
}

export default BusinessAddress;

