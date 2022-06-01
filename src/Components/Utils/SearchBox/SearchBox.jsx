import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

// Styles
import "./SearchBox.styles.css";

const SearchBox = ({ setPokemones, setIsFilter, lon, color }) => {
  const navigate = useNavigate();

  // Save all the pokemons types
  const [pokemonsTypes, setPokemonsTypes] = useState([]);

  // Define pokemon by type
  const [pokemonsByType, setPokemonsByType] = useState([]);

  // Define pokemon by name
  const [pokemonsById, setPokemonsById] = useState(0);

  // Defines whether to filter by type or name
  const [isName, setIsName] = useState(false);

  // Default filter by type
  const [type, setType] = useState("All Pokemons");

  // Get Pokemon's Name
  const [getName, setGetName] = useState("");

  // Define the name
  const [name, setName] = useState("");

  // First Filter
  const [firstFilter, setFirtsFilter] = useState("All Pokemons");

  // Get all the pokemons types
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/type`)
      .then((res) => setPokemonsTypes(res?.data?.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (firstFilter === "All Pokemons") {
      // Here call all the pokemons for the pagination
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${lon}`)
        .then((res) => setFirtsFilter(res.data.results))
        .catch((err) => console.log(err));
    }

    if (type !== "All Pokemons") {
      // Get pokemon by Type
      axios
        .get(`https://pokeapi.co/api/v2/type/${type}`)
        .then((res) => setPokemonsByType(res?.data?.pokemon))
        .catch((err) => console.log(err));
    }

    if (name) {
      // Get pokemon by Name
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((res) => setPokemonsById(res?.data?.id))
        .catch((err) => console.log(err));
    }
  }, [lon, type, name, firstFilter]);

  useEffect(() => {
    if (name.length > 0) {
      if (pokemonsById !== 0) {
        navigate(`/home/${pokemonsById}`);
      } else {
        swal("Enter a valid pokemon name");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonsById, navigate]);

  // Here search by Type or Name
  const handleSearch = (e) => {
    e.preventDefault();

    if (isName === true) {
      setName(getName);
    } else {
      if (type !== "All Pokemons") {
        setIsFilter(true);
        setPokemones(pokemonsByType);
      } else {
        setIsFilter(false);
        setPokemones(firstFilter);
      }
    }
  };

  return (
    <div className="form-filter">
      <span className="filter-type" style={{ color }}>
        <b>Filter By</b>
      </span>
      <div className="container-filter-by" style={{ color }}>
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
              <input
                type="text"
                className="filter-by-name filter-heigth "
                style={{ color, border: "0.1px solid #ffffff" }}
                value={getName}
                onChange={(e) => setGetName(e.target.value)}
              />
            </label>
          </>
        ) : (
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle filter-heigth "
              style={{ color, border: "0.1px solid #ffffff" }}
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
    </div>
  );
};

export default SearchBox;
