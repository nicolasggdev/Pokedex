import { BrowserRouter } from "react-router-dom";

// Styles
import "./reset.styles.css";

// Routes
import AnimatedRoutes from "./Components/Utils/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
