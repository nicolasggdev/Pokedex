import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

// Styles
import "./Home.styles.css";

// Utils
import Nav from "../../Utils/Nav/Nav";

// Components
import Pokemones from "../Pokemones/Pokemones";

const Home = () => {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemones(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Nav />
      <div className="home-container">
        <h1>Pokedex</h1>
        <p>
          Welcome <b>{localStorage.getItem("name")}</b>, here you can find your
          favorite pokemon!
        </p>
        {pokemones?.map((pokemon) => (
          <Pokemones pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </motion.section>
  );
};

export default Home;
