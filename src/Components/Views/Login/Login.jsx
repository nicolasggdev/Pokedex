import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Import Styles
import "./Login.styles.css";

// Import Img
import Ash from "../../Img/Ash.png";

const Login = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handdleName = (e) => {
    e.preventDefault(e);
    localStorage.setItem("name", name);
    navigate("/home");
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="login">
        <h3>Hello Trainer!</h3>

        <div className="img-container">
          <img className="Ash-img" src={Ash} alt="ash-icon" />
        </div>

        <p className="trainer-text">Give me your name to start</p>

        <form className="form-trainer">
          <label htmlFor="text">
            <input
              type="text"
              className="trainer"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <button className="trainer-botton" onClick={(e) => handdleName(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
            </svg>
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
