import React, { useState, useEffect } from "react";
import styles from "./EditItemForm.module.css"; 

function EditItemForm({ item, onSave }) {
    const [editedItem, setEditedItem] = useState({}); // Initialize with an empty object

    // Update editedItem whenever the item prop changes
    useEffect(() => {
        setEditedItem(item);
    }, [item]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedItem({ ...editedItem, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to save edited item (e.g., send to backend)
        onSave(editedItem);
    };

    // Check if item is defined before rendering the form
    if (!editedItem) {
        return null; // or render a message indicating that item is undefined
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Edit Item</h2>
            <input
                type="text"
                name="name"
                value={editedItem.name || ""} // Use conditional rendering to handle undefined values
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="price"
                value={editedItem.price || ""}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="quantity"
                value={editedItem.quantity || ""}
                onChange={handleInputChange}
            />
            <button type="submit" className={styles.saveButton}>Save Changes</button>
        </form>
    );
}

export default EditItemForm;
