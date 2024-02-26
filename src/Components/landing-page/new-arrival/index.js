import React from "react";
import styles from "./index.module.css";
import Products from "../../../pages/produce";

function NewArrival() {
    return (
        <section className={styles.products}>
            <h2>Our Products</h2>
            <p>Agble Ville brings the farm to your doorstep</p>

            <div className={styles.productItems}>
                <div className={styles.productCard}>
                    <img src="assets/assets/images/carrots.avif" alt="" />
                    <div className={styles.productName}>Carrots</div>
                    <div className={styles.productPrice}><span>&#8373;</span>20</div>
                    <button className={styles.viewMoreButton}>Add to cart</button>
                </div>

                <div className={styles.productCard}>
                    <img src="assets/assets/images/potatoes.avif" alt=""/>
                    <div className={styles.productName}>Potatoes</div>
                    <div className={styles.productPrice}><span>&#8373;</span>60</div>
                    <button className={styles.viewMoreButton}>Add to cart</button>
                </div>

                <div className={styles.productCard}>
                    <img src="assets/assets/images/tomatoes.avif" alt="" />
                    <div className={styles.productName}>Tomatoes</div>
                    <div className={styles.productPrice}><span>&#8373;</span>50</div>
                    <button className={styles.viewMoreButton}>Add to cart</button>
                </div>

                <div className={styles.productCard}>
                    <img src="assets/assets/images/milk.avif" alt="" />
                    <div className={styles.productName}>Milk</div>
                    <div className={styles.productPrice}><span>&#8373;</span>20</div>
                    <button className={styles.viewMoreButton}>Add to cart</button>
                </div>

                <div className={styles.productCard}>
                    <img src="assets/assets/images/apples.avif" alt="" />
                    <div className={styles.productName}>Apples</div>
                    <div className={styles.productPrice}><span>&#8373;</span>40</div>
                    <button className={styles.viewMoreButton}>Add to cart</button>
                </div>

                <div className={styles.productCard}>
                    <img src="assets/assets/images/cheese.avif" alt="" />
                    <div className={styles.productName}>Cheese</div>
                    <div className={styles.productPrice}><span>&#8373;</span>90</div>
                    <button className={styles.viewMoreButton}>Add to cart</button>
                </div>


                <div className={styles.productCard}>
                    <img src="assets/assets/images/mushrooms.avif" alt="" />
                    <div className={styles.productName}>Mushrooms</div>
                    <div className={styles.productPrice}><span>&#8373;</span>40</div>
                    <button className={styles.viewMoreButton}>Add to cart</button>
                </div>


                <div className={styles.productCard}>
                    <img src="assets/assets/images/snails.avif" alt="" />
                    <div className={styles.productName}>Snails</div>
                    <div className={styles.productPrice}><span>&#8373;</span>50</div>
                    <button className={styles.viewMoreButton}>Add to cart</button>
                    <Products/>
                </div>
            </div>
        </section>
    );
}

export default NewArrival;