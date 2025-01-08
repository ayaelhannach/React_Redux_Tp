import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./components/Acceuil";
import ProduitList from "./components/ProduitList";
import Panier from "./components/Panier";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={< Accueil/>} />
        <Route path="/produit" element={<ProduitList />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
