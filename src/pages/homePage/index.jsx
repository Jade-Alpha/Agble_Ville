import produce from '../homePage'
import Produce_page from '../producePage'
// import NavBar from '../../Components/landing-page/navBarComponent'
//import Footer from '../../Components/landing-page/footer-section'
import  AboutHero from '../../Components/aboutHeroComponent/aboutHero'
import NavBar from '../../Components/landing-component/navBarComponent/navBar'
import image1 from '../../Assect/vegetables-basket.jpg'
import image3 from '../../Assect/top-view-assortment-vegetables-paper-bag (1).jpg'
import { Link } from 'react-router-dom'
import NewArrival from '../../Components/landing-page/new-arrival'
import Footer from '../../Components/landing-component/footer-section'
import AboutSection from '../../Components/landing-component/about-section'


export default function HomePage() {
    return (

        <>
        <NavBar/>
        
            <div>

                <div className="hero-section">
                    <img src={image3} id="sliderImg" />
                </div>
                <div className="slider">
                    <img src={image1} id="imgSlider" />
                </div>
                <div className="overlay">
                    <section className="banner">
                        <div className="banner-text">
                            <p>Welcome to Abgle Ville</p>
                            <h1>PRODUCTS</h1>
                            <p>GROWN WITH LOVE 💕</p>
                            <div className="banner-btn">
                                <button><Link to="product">BUY NOW</Link></button>

                            </div>
                        </div>
                    </section>
                 
                </div>
            </div>
            <AboutSection/>
            <NewArrival/>
            < Footer/>
            {/* <AboutHero/> */}
            
        {/* </> */}
           
            */
                    </>
    )
}