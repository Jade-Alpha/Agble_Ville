import React, { useState } from "react";
import styles from "./EditItemForm.module.css"; 

function EditItemForm({ item, onSave }) {
    const [editedItem, setEditedItem] = useState(item);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedItem({ ...editedItem, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to save edited item (e.g., send to backend)
        onSave(editedItem);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Edit Item</h2>
            <input
                type="text"
                name="name"
                value={editedItem.name}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="price"
                value={editedItem.price}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="quantity"
                value={editedItem.quantity}
                onChange={handleInputChange}
            />
            <button type="submit" className={styles.saveButton}>Save Changes</button>
        </form>
    );
}

export default EditItemForm;
