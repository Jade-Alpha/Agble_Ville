import styles from "./index.module.css"



function Hero(){
    return (

        <section className={styles.Hero}>
            <h1>Abgle_ville</h1>
            <div className={styles.NavBar}>
             <a href="" className={styles.HeroA}>Home</a> 
             <a href=""  className={styles.HeroA}>About</a> 
             <a href=""  className={styles.HeroA}>Blogs</a> 
             <a href=""  className={styles.HeroA}>Products</a>
             <a href=""  className={styles.HeroA}>Contact Us</a>
            </div>
            <div>
                
            </div>
        </section>
    )

    
};

export default Hero;