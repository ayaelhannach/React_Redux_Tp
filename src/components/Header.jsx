import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}>Accueil</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/produit" style={styles.link}>Produits</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/panier" style={styles.link}>
              <FaShoppingCart style={styles.icon} /> Panier
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  navList: {
    display: "flex",
    justifyContent: "space-around",
    listStyleType: "none",
    padding: 0,
    backgroundColor: "#f8f9fa",
    margin: 0,
  },
  navItem: {
    padding: "10px 15px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  linkHover: {
    color: "#007bff",
  },
  icon: {
    marginRight: "5px",
    fontSize: "18px",
    verticalAlign: "middle",
  },
};

export default Header;
