import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

// Styles
import "./PokemonInfo.styles.css";

// Img
import Pokeball from "../../Img/Pokeball.png";

// Utils
import Nav from "../../Utils/Nav/Nav";

// Details
import PokemonAbout from "./PokemonDetails/PokemonAbout/PokemonAbout";
import PokemonStats from "./PokemonDetails/PokemonStats/PokemonStats";
import PokemonEvolution from "./PokemonDetails/PokemonEvolution/PokemonEvolution";

const Pokemon = () => {
  const { id } = useParams();

  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonSpecies, setPokemonSpecies] = useState({});
  const [background, setBackground] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState("stats");

  const type = pokemonInfo?.types?.[0].type.name;
  const evolution = pokemonSpecies?.evolution_chain;
  const stats = pokemonInfo?.stats;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemonInfo(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => setPokemonSpecies(res.data))
      .catch((err) => console.log(err.data));
  }, [id]);

  useEffect(() => {
    if (type === "fire") {
      setBackground("#FB6C6C");
    } else if (type === "grass") {
      setBackground("#48D0B0");
    } else if (type === "electric") {
      setBackground("#FFD352");
    } else if (type === "normal") {
      setBackground("#B0A8B9");
    } else if (type === "fighting") {
      setBackground("#C34A36");
    } else if (type === "flying") {
      setBackground("#D9F2FD");
    } else if (type === "poison") {
      setBackground("#845EC2");
    } else if (type === "ground") {
      setBackground("#B15B00");
    } else if (type === "rock") {
      setBackground("#D5CABD");
    } else if (type === "bug") {
      setBackground("#008000");
    } else if (type === "ghost") {
      setBackground("#4B4453");
    } else if (type === "steel") {
      setBackground("#00C9A7");
    } else if (type === "water") {
      setBackground("#91CAFD");
    } else if (type === "psychic") {
      setBackground("#FF6F91");
    } else if (type === "ice") {
      setBackground("#C4FCEF");
    } else if (type === "dragon") {
      setBackground("#4D8076");
    } else if (type === "dark") {
      setBackground("#252527");
    } else if (type === "fairy") {
      setBackground("#252527");
    } else {
      setBackground("#ffffff");
    }
  }, [type]);

  return (
    <motion.section
      className="pokemon-info-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ background }}
    >
      <Nav />
      <div className="pokemon-info">
        <h2>
          <b>
            {pokemonInfo?.name?.toUpperCase()}
            <br />#{pokemonInfo?.id}
          </b>
        </h2>
        <p className="pokemon-text-info">
          {pokemonInfo.types?.map((type) => (
            <span className="pokemon-text-span" key={type?.slot}>
              {type?.type?.name}
            </span>
          ))}
        </p>
        <div>
          <div className="container-pokemon-info-img">
            <img
              className="pokemon-info-img"
              src={
                pokemonInfo.sprites?.other?.["official-artwork"]?.front_default
              }
              alt={pokemonInfo?.name}
            />
            <img className="pokeball" src={Pokeball} alt={Pokeball} />
          </div>
          <div className="pokemon-data-container">
            <div className="container-button-details">
              <button
                className="button-details button-about"
                onClick={() => setPokemonDetails("about")}
              >
                <b>About</b>
              </button>
              <button
                className="button-details"
                onClick={() => setPokemonDetails("stats")}
              >
                <b>Stats</b>
              </button>
              <button
                className="button-details"
                onClick={() => setPokemonDetails("evolution")}
              >
                <b>Evolution</b>
              </button>
            </div>
            <div>
              {pokemonDetails === "about" ? (
                <PokemonAbout />
              ) : pokemonDetails === "stats" ? (
                <PokemonStats stats={stats} background={background} />
              ) : (
                <PokemonEvolution evolution={evolution} />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Pokemon;
