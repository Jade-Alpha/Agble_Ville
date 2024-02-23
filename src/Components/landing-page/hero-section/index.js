import styles from "./index.module.css"



function Hero(){
    return (

       <div>
       
        <section className={styles.Hero}>
            <h1>Abgle Ville</h1>
            <div className={styles.HeroNavBar}>
             <a href="" className={styles.HeroA}>Home</a> 
             <a href="" className={styles.HeroA}>About</a> 
             <a href="" className={styles.HeroA}>Blogs</a> 
             <a href="" className={styles.HeroA}>Products</a>
             <a href="" className={styles.HeroA}>Contact Us</a>
            </div>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input className={styles.HeroInput} placeholder="search"/>
            </section>

            <div className={styles.HeroSection}>
             <img src=""  alt="" /> 
            <h3 className={styles.HeroSectionH3}>Welcome To Abgle Ville</h3>
            <h1 className={styles.HeroSectionH1}>Products</h1>
            <p>GROWN WITH LOVE 💕</p>
            <button className={styles.HeroSectionButton}>Buy Now</button>

            </div> 
        
       </div>
    )

    
};

export default Hero;