import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import "./Pokemones.styles.css";

const Pokemon = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [background, setBackground] = useState("");
  const navigate = useNavigate();

  const { name, id, types, sprites } = pokemonInfo;

  const type = types?.[0].type.name;

  useEffect(() => {
    axios
      .get(`${pokemon.url}`)
      .then((res) => setPokemonInfo(res.data))
      .catch((err) => console.log(err));
  }, [pokemon.url]);

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

  const handdlePokemonInfo = (e, id) => {
    e.preventDefault();
    navigate(`/home/${id}`);
  };

  return (
    <div
      className="pokemon-card"
      style={{ background }}
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
