import React from "react";
import styles from "./CartItem.module.css";

function CartItem({ item, onRemoveItem }) {
    return (
        <div className={styles.cartItem}>
            <div>Name: {item?.name}</div>
            <div>Price: {item?.price}</div>
            <div>Quantity: {item?.quantity}</div>
            <button onClick={() => onRemoveItem(item.id)} className={styles.removeButton}>
                Remove
            </button>
        </div>
    );
}

export default CartItem;