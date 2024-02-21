import React from "react";
import styles from "./index.module.css";

function NewArrival() {
    return (
        <section className= {products}>
            <h2>Our Products</h2>
            <p>Agble Ville brings the farm to your doorstep</p>
            <div className={product-items}>
                <div className={product-card}>
                    <img src="assets/more (2).jpg" alt="" />
                    <div className={product-name}>Carrots</div>
                    <div className={product-price}><span>&#8373;</span>20</div>
                    <button className={view-more-button}>View More</button>
                </div>
                <div className={product-card}>
                    <img src="assets/more (1).jpg" alt="" />
                    <div className={product-name}>Potatoes</div>
                    <div className={product-price}>$6</div>
                    <button className={view-more-button}>View More</button>
                </div>
                <div className={product-card}>
                    <img src="assets/car4 (1).jpg" alt="" />
                    <div className={product-name}>Mushrooms</div>
                    <div className={product-price}>$15</div>
                    <button className={view-more-button}>View More</button>
                </div>
                <div className={product-card}>
                    <img src="assets/car4 (2).jpg" alt="" />
                    <div className={product-name}>Tomatoes</div>
                    <div className={product-price}>$1</div>
                    <button className={view-more-button}>View More</button>
                </div>
                <div className={product-card}>
                    <img src="assets/car4 (3).jpg" alt="" />
                    <div className={product-name}>Milk</div>
                    <div className={product-price}>$20</div>
                    <button className={view-more-button}>View More</button>
                </div>
                <div className={product-card}>
                    <img src="assets/car4 (4).jpg" alt="" />
                    <div className={product-name}>Mixed veggies</div>
                    <div className={product-price}>$18</div>
                    <button className={view-more-button}>View More</button>
                </div>
                <div className={product-card}>
                    <img src="assets/Car3.jpg" alt="" />
                    <div className={product-name}>Milk</div>
                    <div className={product-price}>$120,000</div>
                    <button className={view-more-button}>View More</button>
                </div>
                <div className={product-card}>
                    <img src="assets/car4 (5).jpg" alt="" />
                    <div className={product-name}>Cheese</div>
                    <div className={product-price}>$90</div>
                    <button className={view-more-button}>View More</button>
                </div>
            </div>
        </section>
    );
}

export default NewArrival;
