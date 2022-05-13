import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import "./Pokemones.styles.css";

const Pokemon = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${pokemon.url}`)
      .then((res) => setPokemonInfo(res.data))
      .catch((err) => console.log(err));
  }, [pokemon.url]);

  const { name, id, types, sprites } = pokemonInfo;

  const type = types?.[0].type.name;

  const handdlePokemonInfo = (e, id) => {
    e.preventDefault();
    navigate(`/home/${id}`);
  };

  return (
    <div
      className="pokemon-card"
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
      onClick={(e) => handdlePokemonInfo(e, id)}
    >
      <h4>{name}</h4>
      <div className="pokemon-preview">
        <p className="pokemon-text">
          {types?.map((type) => (
            <p className="pokemon-type" key={type?.slot}>
              {type?.type?.name}
            </p>
          ))}
        </p>
        <img
          src={sprites?.other?.["official-artwork"]?.front_default}
          alt={name}
        />
      </div>
    </div>
  );
};

export default Pokemon;
