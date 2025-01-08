import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ActionsCreators";

function Produit({ produit }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{produit.nom}</h3>
      <p>Prix: {produit.prix}€</p>
      <img src={produit.image} alt={produit.nom} />
      <button onClick={() => dispatch(addToCart(produit.id))}>
        Ajouter au panier
      </button>
    </div>
  );
}

export default Produit;
