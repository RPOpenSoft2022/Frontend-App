import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import "./App.css";
import Stores from "./components/Stores/Stores"
import Store from "./components/Store/Store"
import Orders from "./components/Orders/Orders"
import ResponsiveAppBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Stores" element={<Stores />} />
          <Route path="/Stores/:id" element={<Store />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
