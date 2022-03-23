import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import "./App.css";
import Stores from "./components/Stores/Stores"
import Store from "./components/Store/Store"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Stores" element={<Stores />} />
          <Route path="/Stores/:id" element={<Store />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
