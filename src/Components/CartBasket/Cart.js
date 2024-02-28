import React from "react";
import CartItem from "./CartItem";
import styles from "./cart.module.css";

function Cart({ items, onRemoveItem, onUpdateQuantity }) {
    return (
        <div className={styles.cart}>
            <h2>Shopping Cart</h2>
            <div className={styles.cartItems}>
                {items.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onRemoveItem={onRemoveItem}
                        onUpdateQuantity={onUpdateQuantity}
                    />
                ))}
            </div>
        </div>
    );
}

export default Cart;

