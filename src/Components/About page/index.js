
import React from 'react';
import styles from "./index.module.css"
import SectionServiceItem from '../USP-section';
import pic from "../about-section/asserts/Image5.png"
import pic5 from "../about-section/asserts/next.png"

function AboutPage (){
  return (

        <div>
            <header className="bg">
                <div className="top-items">
    
                    <div> <button class="btn">SHOP</button></div>
                </div>
                <div class="header-text">
                    <h1>It's The IT GIRL ERA....BE ONE <span class="span"> ITGIRLS.COM</span>
                         <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti similique quaerat dignissimos
                            voluptate beatae ad sapiente optio quos excepturi soluta hic ipsum, impedit quisquam mollitia
                            quia totam harum illo rem!</P>
                    </h1> 
                </div>
    
    
            </header>
            <section class="about-section">
                <div class="about-text">
                    <div>
                        <h2 class="icon">ITGIRLS.COM</h2>
                    </div>
                    <h3>About Us</h3>
    
                    <h4>
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Fugiat expedita et
                        labore necessitatibus odio commodi ducimus obcaecati eligendi
    
                    </h4>
    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Volmpedit non placeat nam n
                        atus amet doloribus deserunt, ut fuga quos eius quasi inventore assumenda.</p>
    
                </div>
    
    
            </section>
    
            <section class="new-item">
                <div class="new-item-text">
                    <h2>OUR TOP SELLER</h2>
    
                    <div class="texts">
                        <h3>IT'S THE IT GIRL ERA...</h3>
    
                        <p>Lorem ipsum, dolor sit rem consequatur nesciunt laborum perferendis maxime? 
                            Enim, autem
                            ossimus.
                        </p>
    
                    </div>
                    <div> <button class="btn">SHOP</button></div>
    
                </div>
    
                <div class="img">
                    {/* <img src="assets/pexels-lizzy-honey-18031831.jpg" alt="LIPSTICK" height="450px" width="350px">
     */}
                </div>
    
            </section>
            <section class="services">
                <h2>Our Services</h2>
                <div class="service-item">
    
                    <div class="service-card">
                        <h3>GIFT BOXES
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="service-card">
                        <h3>BUNDLE DEALS
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
    
                    </div>
                    <div class="service-card">
                        <h3>SUPRISE PRODUCT
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
    
            </section>
    
        
    
            <section class="teamsession">
                <h2>The Team</h2>
                <div className="team">
    
    
                    
                       
                        <div class="team-card">
                            <h3>PRODUCT MANAGER
                            </h3>
                            <p>
                                {/* <img src="assets/joseph-gonzalez-iFgRcqHznqg-unsplash (1).jpg" alt="prdoduct1">MR AMOH AGYEMAN */}
                            </p>
    
                        </div>
                        <div class="team-card">
                            <h3>CONTENT MANAGER
                            </h3>
                            <p>
                                {/* <img src="assets/rodney-gainous-jr-p_VF71muhRs-unsplash (1).jpg" alt="product2"> MR KOFI ADU */}
                            </p>
    
    
                        </div>
                        <div class="team-card">
                            <h3>SALES MANAGER
                            </h3>
                            <p>
                                {/* <img src="assets/leon-elldot-f6HbVnGtNnY-unsplash (1).jpg" alt="product2"> ADJOA ABBAN */}
                            </p>
    
    
                        </div>
    
                        
    
            </section>
    
           
                </div>
           
                 
   
  );
}
