import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

// Styles
import "./Home.styles.css";

// Utils
import Nav from "../../Utils/Nav/Nav";
import Pagination from "../../Utils/Pagination/Pagination";

const Home = () => {
  const [pokemones, setPokemones] = useState([]);
  const [lon, setLon] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Here, I found all the pokemons
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => setLon(res.data.count))
      .catch((err) => console.log(err));
  }, []);

  // Here call all the pokemons for the pagination
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${lon}`)
      .then((res) => setPokemones(res.data.results))
      .catch((err) => console.log(err));
  }, [lon]);

  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Nav setItemsPerPage={setItemsPerPage} />
      <div className="home-container">
        <h1>Pokedex</h1>
        <p>
          Welcome <b>{localStorage.getItem("name")}</b>, here you can find your
          favorite pokemon!
        </p>
      </div>
      <Pagination itemsPerPage={itemsPerPage} pokemones={pokemones} />
    </motion.section>
  );
};

export default Home;
