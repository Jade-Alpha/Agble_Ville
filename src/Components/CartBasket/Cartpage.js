import React from "react";
import Cart from "./Cart";
import styles from "./CartPage.module.css";

function CartPage({ items, onRemoveItem, onUpdateQuantity }) {
    // Calculate total cost
    const totalCost = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className={styles.cartPage}>
            <h2>Shopping Cart</h2>
            <Cart items={items} onRemoveItem={onRemoveItem} onUpdateQuantity={onUpdateQuantity} />
            <div className={styles.summary}>
                <div>Total: &#8373;{totalCost.toFixed(2)}</div>
                {/* Additional summary information such as shipping cost, taxes, etc. */}
                <button className={styles.checkoutButton}>Checkout</button>
            </div>
        </div>
    );
}

export default CartPage;
