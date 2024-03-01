import React, { useState } from "react";
import styles from "./index.module.css";
import image from "../../BuyerCatalogue/cart.png";
import bellpepper from "../../BuyerCatalogue/bell_pepper.png";
import carrots from "../../BuyerCatalogue/carrots.png";
import banana from "../../BuyerCatalogue/banana.png";
import broccoli from "../../BuyerCatalogue/broccoli.png";
import cayenne from "../../BuyerCatalogue/cayenne_pepper.png";
import cabbage from "../../BuyerCatalogue/cabbage.png";
import assorted from "../../BuyerCatalogue/assorted_veggies.png";
import tomato from "../../BuyerCatalogue/tomato.png";


const allProducts = [
  { id: 1, name: "Carrots", category: "vegetables", price: 20, image: carrots },
  { id: 2, name: "Bell Peppers", category: "vegetables", price: 20, image: bellpepper },
  { id: 3, name: "Tomatoes", category: "vegetables", price: 50, image: tomato },
  { id: 4, name: "Cabbage", category: "vegetables", price: 20, image: cabbage },
  { id: 5, name: "Bananas", category: "fruits", price: 20, image: banana },
  { id: 6, name: "Broccoli", category: "vegetables", price: 20, image: broccoli },
  { id: 7, name: "Cayenne Pepper", category: "vegetables", price: 10, image: cayenne },
  { id: 8, name: "Assorted Veggies", category: "others", price: 70, image: assorted },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <section className={styles.products}>
      <h2>Latest arrivals</h2> 
      <h1>NEW PRODUCTS</h1>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <button onClick={() => handleCategoryChange("all")}>All</button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("fruits")}>Fruits</button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("vegetables")}>Vegetables</button>
          </li>
        </ul>
      </nav>

      <div className={styles.productItems}>
        {allProducts
          .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
          .map((product) => (
            <div className={styles.productCard} key={product.id}>
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles.productDetails}>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productPrice}>
                  <span>&#8373;</span>
                  {product.price}
                </div>
                <div className={styles.cartIcon} onClick={() => addToCart(product)}>
                  <img src={image} alt={`Add ${product.name} to Cart`} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Products;
