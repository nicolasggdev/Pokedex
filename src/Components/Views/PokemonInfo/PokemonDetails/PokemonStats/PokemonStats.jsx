import React from "react";
import { motion } from "framer-motion";

// Styles
import "./PokemonStats.styles.css";

const PokemonStats = ({ pokemonInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ul>
        {pokemonInfo?.stats?.map((stat) => (
          <li key={stat?.stat?.name}>
            <span>
              <b>{stat?.stat?.name}</b>: {stat?.base_stat}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PokemonStats;
