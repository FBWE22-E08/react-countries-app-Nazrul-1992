import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard";

export default function ByRegion() {
  //save the user input in the pre-made local state (region), then fetch all countries of that region on page load and make sure it gets executed every time the state (region) changes (what hook should you use for that? and what should you add to it?) then save the received array of countries in a local state (call it countries)

  const [region, setRegion] = useState('Africa');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const url = region === 'all' ? 'https://restcountries.com/v2/all' : `https://restcountries.com/v2/region/${region}`;
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    }

    fetchCountries();
  }, [region]);

  function handleChange(event) {
    setRegion(event.target.value);
  }

  return (
    <div>

       
     
          <input type="radio" name="region" value="africa" checked={region === 'africa'} onChange={handleChange} />
          Africa

          <input type="radio" name="region" value="americas" checked={region === 'americas'} onChange={handleChange} />
          Americas
  

          <input type="radio" name="region" value="asia" checked={region === 'asia'} onChange={handleChange} />
          Asia
      
  
          <input type="radio" name="region" value="europe" checked={region === 'europe'} onChange={handleChange} />
          Europe
   
  
          <input type="radio" name="region" value="oceania" checked={region === 'oceania'} onChange={handleChange} />
          Oceania
 
<div className="cardsContainer" >
      {countries.map(country => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
      </div>
    </div>
  );
}
