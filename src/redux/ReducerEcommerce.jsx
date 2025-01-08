
export const InitialState = [
    {
        "id": 1,
        "nom": "Produit1",
        "prix": 14.99,
        "image": "produit1.jpg"
    },
    {
        "id": 2,
        "nom": "Produit2",
        "prix": 12.99,
        "image": "produit2.jpg"
    },
    {
        "id": 3,
        "nom": "Produit3",
        "prix": 13.99,
        "image": "produit3.jpg"
    },
    {
        "id": 4,
        "nom": "Produit4",
        "prix": 14.99,
        "image": "produit4.jpg"
    },
    {
        "id": 5,
        "nom": "Produit5",
        "prix": 13.99,
        "image": "produit5.jpg"
    },
    {
        "id": 6,
        "nom": "Produit6",
        "prix": 11.99,
        "image": "produit6.jpg"
    }
];

const reducer = (state = { produits: InitialState }, action) => {
    switch (action.type) {
      case "Add":
        return {
          ...state,
          produits: state.produits.map((produit) =>
            produit.id === action.payload.id
              ? { ...produit, quantite: (produit.quantite || 0) + action.payload.quantite }
              : produit
          ),
        };
      case "Remove":
        return {
          ...state,
          produits: state.produits.map((produit) =>
            produit.id === action.payload ? { ...produit, quantite: 0 } : produit
          ),
        };
      case "Update":
        return {
          ...state,
          produits: state.produits.map((produit) =>
            produit.id === action.payload.id
              ? { ...produit, quantite: action.payload.quantite }
              : produit
          ),
        };
      default:
        return state;
    }
  };

export default reducer;