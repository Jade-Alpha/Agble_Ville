// NewArrival.js
import React from "react";
import styles from "./index.module.css"; // Import CSS module

function NewArrival() {
    return (
        <section className={styles.productItems}>
            <h2>Our Products</h2>
            <p>Agble Ville brings the farm to your doorstep</p>
            <div className={styles.productCard}>
                <img src="carrots.avif" alt="" />
                <div className={styles.productName}>Carrots</div>
                <div className={styles.productPrice}><span>&#8373;</span>20</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
            <div className={styles.productCard}>
                <img src="assets/more (1).jpg" alt="" />
                <div className={styles.productName}>Potatoes</div>
                <div className={styles.productPrice}>$6</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
            <div className={styles.productCard}>
                <img src="assets/car4 (1).jpg" alt="" />
                <div className={styles.productName}>Mushrooms</div>
                <div className={styles.productPrice}>$15</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
            <div className={styles.productCard}>
                <img src="assets/car4 (2).jpg" alt="" />
                <div className={styles.productName}>Tomatoes</div>
                <div className={styles.productPrice}>$1</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
            <div className={styles.productCard}>
                <img src="assets/car4 (3).jpg" alt="" />
                <div className={styles.productName}>Milk</div>
                <div className={styles.productPrice}>$20</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
            <div className={styles.productCard}>
                <img src="assets/car4 (4).jpg" alt="" />
                <div className={styles.productName}>Mixed veggies</div>
                <div className={styles.productPrice}>$18</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
            <div className={styles.productCard}>
                <img src="assets/Car3.jpg" alt="" />
                <div className={styles.productName}>Milk</div>
                <div className={styles.productPrice}>$120,000</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
            <div className={styles.productCard}>
                <img src="assets/car4 (5).jpg" alt="" />
                <div className={styles.productName}>Cheese</div>
                <div className={styles.productPrice}>$90</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
        </section>
    );
}

export default NewArrival;

