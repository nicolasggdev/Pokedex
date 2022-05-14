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
  const [pokemonDetails, setPokemonDetails] = useState("stats");

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

  const type = pokemonInfo?.types?.[0].type.name;

  return (
    <motion.section
      className="pokemon-info-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        background:
          type === "fire"
            ? "#FB6C6C"
            : type === "grass"
            ? "#48D0B0"
            : type === "electric"
            ? "#FFD352"
            : type === "normal"
            ? "#B0A8B9"
            : type === "fighting"
            ? "#C34A36"
            : type === "flying"
            ? "#D9F2FD"
            : type === "poison"
            ? "#845EC2"
            : type === "ground"
            ? "#B15B00"
            : type === "rock"
            ? "#D5CABD"
            : type === "bug"
            ? "#008000"
            : type === "ghost"
            ? "#4B4453"
            : type === "steel"
            ? "#00C9A7"
            : type === "water"
            ? "#91CAFD"
            : type === "psychic"
            ? "#FF6F91"
            : type === "ice"
            ? "#C4FCEF"
            : type === "dragon"
            ? "#4D8076"
            : type === "dark"
            ? "#252527"
            : type === "fairy"
            ? "#C25E8E"
            : "#ffffff",
      }}
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
                <PokemonStats pokemonInfo={pokemonInfo} />
              ) : (
                <PokemonEvolution />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Pokemon;
