import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Styles
import "./reset.styles.css";

// Utils
import ProtectedRoutes from "./Components/Utils/ProtectedRoutes/ProtectedRoutes";

// Components
import Home from "./Components/Views/Home/Home";
import Login from "./Components/Views/Login/Login";
import Pokemon from "./Components/Views/Pokemon/Pokemon";

function App() {
  const [name, setName] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setName={setName} />} />
        <Route element={<ProtectedRoutes name={name} />}>
          <Route
            path="/home"
            element={<Home name={name} setName={setName} />}
          />
          <Route path="/home/:id" element={<Pokemon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
