import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CardDetails from "./components/Card/CardDetails";
import Favorite from "./components/Favorite/Favorite";
import { FavProvider } from "./Context/FavContext";

function App() {
  return (
    <FavProvider>
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personaje/:id" element={<CardDetails />} />
        <Route path="/misfavoritos" element={<Favorite />} />
      </Routes>
    </Router>
    </FavProvider>
  );
}

export default App;