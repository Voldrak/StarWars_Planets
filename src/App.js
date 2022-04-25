import './App.css';
import { Routes, Route } from "react-router-dom";
import Planets from "./Pages/Planets";
import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/planets" element={<Planets />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
}

export default App;
