import React from "react";
import styles from "./ProductItem.module.css";

function ProductItem({ product, onAddToCart }) {
  return (
    <div className={styles.productItem}>
      <div>Name: {product.name}</div>
      <div>Price: {product.price}</div>
      <button onClick={() => onAddToCart(product)} className={styles.addToCartButton}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
