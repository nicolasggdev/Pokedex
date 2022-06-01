import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// Styles
import "./PokemonEvolution.styles.css";

const PokemonEvolution = ({ evolution }) => {
  const [data, setData] = useState();

  const [firstEvolutionUrl, setFirstEvolutionUrl] = useState();
  const [firstEvolutionData, setFirstEvolutionData] = useState();

  const [secondEvolutionUrl, setSecondEvolutionUrl] = useState();
  const [secondEvolutionData, setSecondEvolutionData] = useState();

  const [thirdEvolutionUrl, setThirdEvolutionUrl] = useState();
  const [thirdEvolutionData, setThirdEvolutionData] = useState();

  const firstEvolution = data?.species;
  const firstUrl = firstEvolutionUrl?.varieties?.[0]?.pokemon.url;

  const secondEvolution = data?.evolves_to?.[0]?.species;
  const secondUrl = secondEvolutionUrl?.varieties?.[0]?.pokemon.url;

  const thirdEvolution = data?.evolves_to?.[0]?.evolves_to?.[0]?.species;
  const thirdUrl = thirdEvolutionUrl?.varieties?.[0]?.pokemon.url;

  // This useEffect is for get all the pokemons evolutions
  useEffect(() => {
    if (evolution?.url) {
      axios
        .get(evolution?.url)
        .then((res) => setData(res?.data?.chain))
        .catch((err) => console.log(err));
    }
  }, [evolution?.url]);

  // This useEffect is for get the url by pokemons evolutions
  useEffect(() => {
    if (firstEvolution && secondEvolution && thirdEvolution) {
      axios
        .get(firstEvolution?.url)
        .then((res) => setFirstEvolutionUrl(res?.data))
        .catch((err) => console.log(err));

      axios
        .get(secondEvolution?.url)
        .then((res) => setSecondEvolutionUrl(res?.data))
        .catch((err) => console.log(err));

      axios
        .get(thirdEvolution?.url)
        .then((res) => setThirdEvolutionUrl(res?.data))
        .catch((err) => console.log(err));
    }
  }, [firstEvolution, secondEvolution, thirdEvolution]);

  // This useEffect is to get the information of each pokemon
  useEffect(() => {
    if (firstUrl && secondUrl && thirdUrl) {
      axios
        .get(firstUrl)
        .then((res) => setFirstEvolutionData(res?.data))
        .catch((err) => console.log(err));

      axios
        .get(secondUrl)
        .then((res) => setSecondEvolutionData(res?.data))
        .catch((err) => console.log(err));

      axios
        .get(thirdUrl)
        .then((res) => setThirdEvolutionData(res?.data))
        .catch((err) => console.log(err));
    }
  }, [firstUrl, secondUrl, thirdUrl]);

  return (
    <motion.div
      className="evolution-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {firstEvolutionData === undefined &&
      secondEvolutionData === undefined &&
      thirdEvolutionData === undefined ? (
        <p className="no-evolution">
          <b>This pokemon has no evolutions</b>
        </p>
      ) : (
        <>
          <div className="pokemon-evolution-card">
            <img
              className="pokemon-evolution"
              src={
                firstEvolutionData?.sprites?.other?.["official-artwork"]
                  ?.front_default
              }
              alt={firstEvolutionData?.name}
            />
            <p>{firstEvolutionData?.name}</p>
          </div>
          <div className="pokemon-evolution-card">
            <img
              className="pokemon-evolution"
              src={
                secondEvolutionData?.sprites?.other?.["official-artwork"]
                  ?.front_default
              }
              alt={secondEvolutionData?.name}
            />
            <p>{secondEvolutionData?.name}</p>
          </div>
          <div className="pokemon-evolution-card">
            <img
              className="pokemon-evolution"
              src={
                thirdEvolutionData?.sprites?.other?.["official-artwork"]
                  ?.front_default
              }
              alt={thirdEvolutionData?.name}
            />
            <p>{thirdEvolutionData?.name}</p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default PokemonEvolution;
