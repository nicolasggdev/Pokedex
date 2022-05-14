import React from "react";
import { motion } from "framer-motion";

const PokemonEvolution = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      PokemonEvolution
    </motion.div>
  );
};

export default PokemonEvolution;
