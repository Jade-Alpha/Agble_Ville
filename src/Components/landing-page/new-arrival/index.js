import React from "react";
import styles from "./index.module.css";

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
                <img src="potatoes.avif" alt="" />
                <div className={styles.productName}>Potatoes</div>
                <div className={styles.productPrice}><span>&#8373;</span>60</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
            <div className={styles.productCard}>
                <img src="mushrooms.avif" alt="" />
                <div className={styles.productName}>Mushrooms</div>
                <div className={styles.productPrice}><span>&#8373;</span>30</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
            <div className={styles.productCard}>
                <img src="tomatoes.avif" alt="" />
                <div className={styles.productName}>Tomatoes</div>
                <div className={styles.productPrice}><span>&#8373;</span>50</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
        
            <div className={styles.productCard}>
                <img src="milk.avif" alt="" />
                <div className={styles.productName}>Milk</div>
                <div className={styles.productPrice}><span>&#8373;</span>20</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
           
            <div className={styles.productCard}>
                <img src="apples.avif" alt="" />
                <div className={styles.productName}>Apples</div>
                <div className={styles.productPrice}><span>&#8373;</span>40</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
            <div className={styles.productCard}>
                <img src="cheese.avif" alt="" />
                <div className={styles.productName}>Cheese</div>
                <div className={styles.productPrice}><span>&#8373;</span>90</div>
                <button className={styles.viewMoreButton}>View More</button>
            </div>
        </section>
    );
}

export default NewArrival;

