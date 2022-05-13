import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    axios
      .get(`${pokemon.url}`)
      .then((res) => setPokemonInfo(res.data))
      .catch((err) => console.log(err));
  }, [pokemon.url]);

  return (
    <div>
      <p>{pokemonInfo.name}</p>
      <img
        src={pokemonInfo?.sprites?.other?.home?.front_default}
        alt={pokemonInfo.name}
      />
    </div>
  );
};

export default Pokemon;
