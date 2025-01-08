import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function ProduitList() {
  const produits = useSelector((state) => state.produits);
  const dispatch = useDispatch();

  const [quantites, setQuantites] = useState({});
  const [totalQuantite, setTotalQuantite] = useState(0);
  const [totalPrix, setTotalPrix] = useState(0);

  const handleQuantityChange = (id, value) => {
    const updatedQuantites = { ...quantites, [id]: value };
    setQuantites(updatedQuantites);
    calculerTotaux(updatedQuantites);
  };

  const ajouterAuPanier = (produit) => {
    const quantite = parseInt(quantites[produit.id]) || 1;
    dispatch({
      type: "Add",
      payload: { ...produit, quantite },
    });
  };

  const calculerTotaux = (updatedQuantites) => {
    let totalQte = 0;
    let totalPrixFinal = 0;

    produits.forEach((produit) => {
      const qte = parseInt(updatedQuantites[produit.id]) || 0;
      totalQte += qte;
      totalPrixFinal += qte * produit.prix;
    });

    setTotalQuantite(totalQte);
    setTotalPrix(totalPrixFinal);
  };

  return (
    <div>
      <h1>Liste des produits</h1>
      <ul>
        {produits.map((produit) => (
          <li key={produit.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={produit.image} alt={produit.nom} width={50} style={{ marginRight: '10px' }} />
            <span style={{ marginRight: '10px' }}>{produit.nom} - {produit.prix}€</span>
            <input
              type="number"
              placeholder="Qté"
              min="1"
              value={quantites[produit.id] || ""}
              onChange={(e) => handleQuantityChange(produit.id, e.target.value)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ marginRight: '10px' }}>Total: {(quantites[produit.id] || 1) * produit.prix}€</span>
            <button onClick={() => ajouterAuPanier(produit)} style={{ backgroundColor: 'red', color: 'white' }}>Ajouter au panier</button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '20px' }}>
        <h3>Qte: {totalQuantite}</h3>
        <h3>Total Prix: {totalPrix}€</h3>
      </div>
      <a href="/panier" style={{ marginTop: '20px', display: 'inline-block', padding: '10px', backgroundColor: 'blue', color: 'white', textDecoration: 'none' }}>Voir le panier</a>
    </div>
  );
}

export default ProduitList;
