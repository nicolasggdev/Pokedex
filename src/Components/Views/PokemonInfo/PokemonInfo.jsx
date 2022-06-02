import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

// Styles
import "./PokemonInfo.styles.css";

// Img
import Pokeball from "../../Img/Pokeball.png";

// Utils
import Loader from "../../Utils/Loader/Loader";

// Details
import PokemonAbout from "./PokemonDetails/PokemonAbout/PokemonAbout";
import PokemonStats from "./PokemonDetails/PokemonStats/PokemonStats";
import PokemonEvolution from "./PokemonDetails/PokemonEvolution/PokemonEvolution";

const Pokemon = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonSpecies, setPokemonSpecies] = useState({});
  const [background, setBackground] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState("stats");
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  const type = pokemonInfo?.types?.[0].type.name;
  const evolution = pokemonSpecies?.evolution_chain;
  const stats = pokemonInfo?.stats;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setPokemonInfo(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species`)
      .then((res) => setCount(res.data.count))
      .catch((err) => console.log(err.data));

    if (id < count) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        .then((res) => setPokemonSpecies(res.data))
        .catch((err) => console.log(err.data));
    }
  }, [id, count]);

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
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <button className="comeback" onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
            </svg>
          </button>
          <button
            className="navbar-toggler d-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z" />
            </svg>
          </button>
        </div>
      </nav>
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
              {isLoading ? (
                <Loader />
              ) : pokemonDetails === "about" ? (
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
