import React, { useState } from "react";
import styles from "./BuyerCatalogue.module.css";
import image from "./cart.png";
import bellpepper from "./bell_pepper.png";
import carrots from "./carrots.png";
import banana from "./banana.png";
import broccoli from "./broccoli.png";
import cayenne from "./cayenne_pepper.png";
import cabbage from "./cabbage.png";
import assorted from "./assorted_veggies.png";
import tomato from "./tomato.png";
import CartPage from "../CartBasket/Cartpage";

const allProducts = [
  { id: 1, name: "Carrots", category: "vegetables", price: 20, image: carrots },
  { id: 2, name: "Bell Pepper", category: "vegetables", price: 20, image: bellpepper },
  { id: 3, name: "Tomatoes", category: "vegetables", price: 50, image: tomato },
  { id: 4, name: "Cabbage", category: "vegetables", price: 20, image: cabbage },
  { id: 5, name: "Banana", category: "fruits", price: 20, image: banana },
  { id: 6, name: "Broccoli", category: "vegetables", price: 20, image: broccoli },
  { id: 7, name: "Cayenne Pepper", category: "vegetables", price: 10, image: cayenne },
  { id: 8, name: "Assorted Veggies", category: "others", price: 70, image: assorted },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className={styles.products}>
      <h1>OUR PRODUCTS</h1>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

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
          .filter((product) => searchTerm === "" || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
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
      {/* Display the CartPage component passing cartItems */}
      <CartPage items={cartItems} />
    </section>
  );
}

export default Products;
