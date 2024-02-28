import React from "react";
import styles from "./index.module.css";

function NewArrival() {
    return (
        <section className={styles.products}>
            <h2>Our Products</h2>
            <p>Agble Ville brings the farm to your doorstep</p>

            <div className={styles.productItems}>
                <div className={styles.productCard}>
                    <img src="assets/assets/images/carrots.avif" alt="" />
                    <div className={styles.productName}>Carrots</div>
                </div>

                <div className={styles.productCard}>
                    <img src="assets/assets/images/potatoes.avif" alt=""/>
                    <div className={styles.productName}>Potatoes</div>
                </div>

                <div className={styles.productCard}>
                    <img src="assets/assets/images/tomatoes.avif" alt="" />
                    <div className={styles.productName}>Tomatoes</div>
                    <button className={styles.viewMoreButton}>View More</button>
                </div>
            </div>
        </section>
    );
}

export default NewArrival;
