import produce from '../homePage'
import Produce_page from '../producePage'
// import NavBar from '../../Components/landing-page/navBarComponent'
import NavBar from '../../Components/landing-page/navBarComponent/navBar'
//import Footer from '../../Components/landing-page/footer-section'
import  AboutHero from '../../Components/aboutHeroComponent/aboutHero'
import NavBar from '../../Components/landing-component/navBarComponent/navBar'
import image1 from '../../Assect/bg1.jpg'
import image3 from '../../Assect/bg3.jpg'



export default function HomePage() {
    return (

        <>
        <NavBar/>
        <div>
        
        <div className="hero-section">
         <img src={image3} id="sliderImg"/>
        </div>
        <div className="slider">
        <img src={image1} id="imgSlider"/>
        </div>
        <div className="overlay">
          <section  className="banner">
                 <div className="banner-text">
                      <p>Welcome to Abgle Ville</p>
                     <h1>PRODUCTS</h1>
                     <p>GROWN WITH LOVE 💕</p>
                     <div className="banner-btn">
                       <button>BUY NOW</button>
                      
                     </div>
                     </div>
             </section>
       </div>
        </div>
<<<<<<< HEAD
       
=======
            <NavBar />
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
                                <button>BUY NOW</button>

                            </div>
                        </div>
                    </section>
                 
                </div>
            </div>
            <NewArrival/>
            < Footer/>
            <AboutHero/>
            
=======
>>>>>>> 48d4cb162560461d58c051f8fe9de24eb1163fd8
        </>
    )
}