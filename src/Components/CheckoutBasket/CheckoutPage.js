import React from 'react';
import CheckoutForm from './CheckoutForm';
import styles from './CheckoutPage.module.css';



function CheckoutPage({ cartItems, onRemoveItem, onUpdateQuantity }) {
    return (
        <div className={styles.checkoutPage}>
            <h2>Checkout</h2>
            <div className={styles.cartContainer}>
                <cart items={cartItems} onRemoveItem={onRemoveItem} onUpdateQuantity={onUpdateQuantity} />
            </div>
            <div className={styles.formContainer}>
                <CheckoutForm />
            </div>
        </div>
    );
}

export default CheckoutPage;
