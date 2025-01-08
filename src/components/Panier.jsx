import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Panier() {
  const produitsDansPanier = useSelector((state) => state.produits.filter((produit) => produit.quantite > 0));
  const dispatch = useDispatch();

  const supprimerDuPanier = (id) => {
    dispatch({ type: "Remove", payload: id });
  };

  const modifierQuantite = (id, quantite) => {
    dispatch({
      type: "Update",
      payload: { id, quantite: parseInt(quantite) || 1 },
    });
  };

  const total = produitsDansPanier.reduce((acc, produit) => acc + produit.prix * produit.quantite, 0);
  const totalQuantite = produitsDansPanier.reduce((acc, produit) => acc + produit.quantite, 0);

  return (
    <div>
      <h1>Contenu du panier</h1>
      <ul>
        {produitsDansPanier.map((produit) => (
          <li key={produit.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={produit.image} alt={produit.nom} width={50} style={{ marginRight: '10px' }} />
            <span style={{ marginRight: '10px' }}>{produit.nom} - {produit.prix}€</span>
            <input
              type="number"
              min="1"
              value={produit.quantite}
              onChange={(e) => modifierQuantite(produit.id, e.target.value)}
              style={{ marginRight: '10px' }}
            />
            <button onClick={() => supprimerDuPanier(produit.id)} style={{ backgroundColor: 'red', color: 'white', marginRight: '5px' }}>Supprimer</button>
            <button onClick={() => modifierQuantite(produit.id, produit.quantite)} style={{ backgroundColor: 'orange', color: 'white' }}>Modifier</button>
          </li>
        ))}
      </ul>
      <p>Qté : {totalQuantite}</p>
      <p>Prix total : {total.toFixed(2)}€</p>
      <button style={{ backgroundColor: 'red', color: 'white' }}>Commander</button>
    </div>
  );
}

export default Panier;
