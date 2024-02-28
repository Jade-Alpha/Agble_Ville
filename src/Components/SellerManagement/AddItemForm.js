import React, { useState } from "react";
import styles from "./AddItemForm.module.css";

function AddItemForm() {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to submit the form data (e.g., send to backend)
        console.log("Item submitted:", itemName, itemPrice, itemQuantity);
        // Reset form fields
        setItemName("");
        setItemPrice("");
        setItemQuantity("");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Add New Item</h2>
            <input
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
            />
            <button type="submit" className={styles.addButton}>Add Item</button>
        </form>
    );
}

export default AddItemForm;
