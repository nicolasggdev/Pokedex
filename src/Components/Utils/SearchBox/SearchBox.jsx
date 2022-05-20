import React, { useEffect, useState } from "react";
import axios from "axios";

// Styles
import "./SearchBox.styles.css";

const SearchBox = ({ setPokemones, setIsFilter, lon }) => {
  // Save all the pokemons types
  const [pokemonsTypes, setPokemonsTypes] = useState([]);

  // Define pokemon by type
  const [pokemonsByType, setPokemonsByType] = useState([]);

  // Defines whether to filter by type or name
  const [isName, setIsName] = useState(false);

  // Default filter by type
  const [type, setType] = useState("All Pokemons");

  // First Filter
  const [firstFilter, setFirtsFilter] = useState("All Pokemons");

  // Here call all the pokemons for the pagination
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${lon}`)
      .then((res) => setFirtsFilter(res.data.results))
      .catch((err) => console.log(err));
  }, [lon]);

  // Get all the pokemons types
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/type`)
      .then((res) => setPokemonsTypes(res?.data?.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}`)
      .then((res) => setPokemonsByType(res?.data?.pokemon))
      .catch((err) => console.log(err));
  }, [type]);

  // Here search by Type or Name
  const handleSearch = (e) => {
    e.preventDefault();

    if (type !== "All Pokemons") {
      setIsFilter(true);
      setPokemones(pokemonsByType);
    } else {
      setIsFilter(false);
      setPokemones(firstFilter);
    }
  };

  return (
    <form className="form-filter">
      <span className="filter-type">
        <b>Filter By</b>
      </span>
      <div className="container-filter-by">
        <span className="filter-by">Type</span>
        <div className="switch-button">
          <input
            type="checkbox"
            className="switch-button switch-button__checkbox"
            id="switch-label"
            onClick={() => setIsName(!isName)}
          />

          <label
            htmlFor="switch-label"
            className="switch-button__label"
          ></label>
        </div>
        <span className="filter-by">Name</span>
      </div>

      <form>
        {isName ? (
          <>
            <label>
              <input type="text" className="filter-by-name" />
            </label>
          </>
        ) : (
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              value="All Pokemons"
            >
              {type}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setType("All Pokemons")}
                >
                  All Pokemons
                </button>
              </li>
              {pokemonsTypes?.map((pokemonsType) => (
                <li key={pokemonsType.name}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setType(pokemonsType.name)}
                  >
                    {pokemonsType.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button className="search" onClick={(e) => handleSearch(e)}>
          Search
        </button>
      </form>
    </form>
  );
};

export default SearchBox;
