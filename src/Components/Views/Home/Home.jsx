import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

// Styles
import "./Home.styles.css";

// Utils
import Nav from "../../Utils/Nav/Nav";
import Pagination from "../../Utils/Pagination/Pagination";
import SearchBox from "../../Utils/SearchBox/SearchBox";

const Home = () => {
  const [pokemones, setPokemones] = useState([]);

  const [isFilter, setIsFilter] = useState(false);

  const [lon, setLon] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(8);

  const [isTheme, setIsTheme] = useState(true);

  const [background, setBackground] = useState("");

  const [color, setcolor] = useState("");

  const [isLoading, setIsLoading] = useState(true);

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
      .then((res) => {
        setPokemones(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [lon]);

  useEffect(() => {
    if (isTheme) {
      setBackground("#ffffff");
      setcolor("#000000");
    } else {
      setBackground("#000000");
      setcolor("#ffffff");
    }
  }, [isTheme]);

  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ background }}
    >
      <Nav
        setItemsPerPage={setItemsPerPage}
        setIsTheme={setIsTheme}
        isTheme={isTheme}
      />
      <div className="home-container" style={{ color }}>
        <h1>Pokedex</h1>
        <p>
          Welcome <b>{sessionStorage.getItem("name")}</b>, here you can find
          your favorite pokemon!
        </p>
      </div>
      <SearchBox
        setPokemones={setPokemones}
        setIsFilter={setIsFilter}
        lon={lon}
        color={color}
      />
      <Pagination
        itemsPerPage={itemsPerPage}
        pokemones={pokemones}
        isFilter={isFilter}
        isLoading={isLoading}
      />
    </motion.section>
  );
};

export default Home;
