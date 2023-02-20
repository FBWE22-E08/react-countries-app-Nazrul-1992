import React, { useState } from "react";
import SearchResult from "../SearchResult";

export default function ByName() {
  //save the user input in a local state (call it searchInput), then fetch that country on submit, then save the received country in another local state (call it country) - always check how does the response look like using console.log before saving it in the state. 
  const [searchInput, setSearchInput] = useState();
  const [country, setCountry] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(`https://restcountries.com/v2/name/${searchInput}`);
    const data = await response.json();
    setCountry(data[0]);
  }

    const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: "30px" }}>
        <input type="text" value={searchInput} onChange={handleChange} />
        <button type="submit">search</button>
      </form>
      {/* show the country you received from fetch and saved in the local state (use SearchResult component to display that country) */}
      {country && <SearchResult country={country} />}

    </div>
  );
}
