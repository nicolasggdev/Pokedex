import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Utils
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";

// Components
import Home from "../../Views/Home/Home";
import Login from "../../Views/Login/Login";
import PokemonInfo from "../../Views/PokemonInfo/PokemonInfo";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<PokemonInfo />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
