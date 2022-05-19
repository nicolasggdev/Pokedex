import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Styles
import "./PokemonStats.styles.css";

const PokemonStats = ({ stats, background }) => {
  const [hp, setHp] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [spAttack, setSpAttack] = useState(0);
  const [spDefense, setSpDefense] = useState(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    stats?.map((stat) => {
      if (stat?.stat?.name === "hp") {
        setHp(stat?.base_stat);
      } else if (stat?.stat?.name === "attack") {
        setAttack(stat?.base_stat);
      } else if (stat?.stat?.name === "defense") {
        setDefense(stat?.base_stat);
      } else if (stat?.stat?.name === "special-attack") {
        setSpAttack(stat?.base_stat);
      } else if (stat?.stat?.name === "special-defense") {
        setSpDefense(stat?.base_stat);
      } else if (stat?.stat?.name === "speed") {
        setSpeed(stat?.base_stat);
      }
    });
  }, [stats]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ul>
        <li>
          <p className="stats-details-title">HP</p>
          <div className="stats-details-texts">
            <span>{hp} </span>
            <div className="container-progress">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={hp}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${hp}%`, background }}
                ></div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className="stats-details-title">Attack</p>
          <div className="stats-details-texts">
            <span>{attack} </span>
            <div className="container-progress">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={attack}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${attack}%`, background }}
                ></div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className="stats-details-title">Defense</p>
          <div className="stats-details-texts">
            <span>{defense} </span>
            <div className="container-progress">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={defense}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${defense}%`, background }}
                ></div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className="stats-details-title">Sp. Attack</p>
          <div className="stats-details-texts">
            <span>{spAttack} </span>
            <div className="container-progress">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={spAttack}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${spAttack}%`, background }}
                ></div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className="stats-details-title">Sp. Defense</p>
          <div className="stats-details-texts">
            <span>{spDefense} </span>
            <div className="container-progress">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={spDefense}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${spDefense}%`, background }}
                ></div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className="stats-details-title">Speed</p>
          <div className="stats-details-texts">
            <span>{speed} </span>
            <div className="container-progress">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={speed}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${speed}%`, background }}
                ></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default PokemonStats;
