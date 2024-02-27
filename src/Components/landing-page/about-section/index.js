
import React from 'react';
import styles from "./index.module.css"
import SectionServiceItem from '../USP-section';
import pic from "../about-section/asserts/Image5.png"
import pic5 from "../about-section/asserts/next.png"

function AboutSection (){
  return (
    <section className="about-section">
      
         <div className="new-item-text">
          
               <div>

                   <img className="img" src={pic}/>
               </div>
                
            
                  <div  className="texts">
                  <h5>A few words about our farm</h5>
                <h3 className='Ab'>ABOUT US </h3>
                    

                  <p className='pg'>Lorem ipsum, dolor sit rem 
                    consequatur nesciunt laborum 
                    perferendis maxime? 
                     Enim, autemossimus.
                  </p>

                  <div className='botton'> <button class="btn">  <img className="img1" src={pic5}/></button> click for more</div>
               
               

                  </div>
            </div>
        
    <SectionServiceItem/>
    </section>
  );
}





 





export default AboutSection;
