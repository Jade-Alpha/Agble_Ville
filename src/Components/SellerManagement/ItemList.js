import React from "react";
import styles from "./ItemList.module.css";

function ItemList({ items, onDelete }) {
    if (!items || items.length === 0) {
        return <div className={styles.itemList}>No items available</div>;
    }

    return (
        <div className={styles.itemList}>
            <h2>Item List</h2>
            {items.map((item) => (
                <div className={styles.itemCard} key={item.id}>
                    <div>Name: {item.name}</div>
                    <div>Price: {item.price}</div>
                    <div>Quantity: {item.quantity}</div>
                    <button onClick={() => onDelete(item.id)} className={styles.deleteButton}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
