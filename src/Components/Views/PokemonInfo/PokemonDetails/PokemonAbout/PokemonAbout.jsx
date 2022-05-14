import React from "react";
import { motion } from "framer-motion";

const PokemonAbout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      PokemonEvolution
    </motion.div>
    //   {
    //     <div>
    //   <p>
    //     <b>Species:</b> PENDIENTE
    //   </p>
    //   <p>
    //     <b>Height:</b> {pokemonInfo?.height}
    //   </p>
    //   <p>
    //     <b>Weight:</b> {pokemonInfo?.weight}
    //   </p>
    //   <p>
    //     <b>Abilities:</b>
    //     {pokemonInfo?.abilities?.map((ability) => (
    //       // Pendiente CAMBIAR A SPAN O UNA LISTA!
    //       <p key={ability?.ability?.name}>{ability?.ability?.name}</p>
    //     ))}
    //   </p>
    // </div>
    // <div>
    //   <span>
    //     <b>Breeding</b>
    //   </span>
    //   <p>
    //     <b>Gender</b> PENDIENTE
    //   </p>
    //   <p>
    //     <b>Egg Groups</b> {pokemonSpecies?.egg_groups?.[0]?.name}
    //   </p>
    //   <p>
    //     <b>Habitat</b> {pokemonSpecies?.habitat?.name}
    //   </p>
    // </div>
    //   };
  );
};

export default PokemonAbout;
