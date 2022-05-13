import React, { useEffect, useState } from "react";
import axios from "axios";

// Styles
import "./Home.styles.css";

// Utils
import Nav from "../../Utils/Nav/Nav";

// Components
import Pokemones from "../Pokemones/Pokemones";

const Home = ({ name, setName }) => {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemones(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Nav setName={setName} />
      <div className="home-container">
        <h1>Pokedex</h1>
        <p>
          Welcome <b>{name}</b>, here you can find your favorite pokemon!
        </p>
      </div>
      {pokemones?.map((pokemon) => (
        <Pokemones pokemon={pokemon} key={pokemon.name} />
      ))}
    </section>
  );
};

export default Home;
