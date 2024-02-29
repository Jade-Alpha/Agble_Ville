
import React from 'react';
import "./index.css"
import SectionServiceItem from '../USP-section';
import pic from "../../../Assect/Image5.png"
import pic5 from "../../../Assect/next.png"
import { Link } from "react-router-dom"

function AboutSection (){
  return (
    <section className="about-section">
      
         <div className="new-item-text">
          
               <div>

                   <img className="img" src={pic}/>
               </div>
               {/* #E9DA5D */}
            
                  <div  className="texts">
                  <h5>A few words about our farm</h5>
                <h3 className='Ab'>ABOUT US </h3>
                    

                  <p className='pg'>Lorem ipsum, dolor sit rem 
                    consequatur nesciunt laborum 
                    perferendis maxime? 
                     Enim, autemossimus.
                  </p>

                  {/* < className='botton'> <button class="btn">  <img className="img1" src={pic5}/></button> click for more</div> */}
                  <Link className='botton' to="/about"> <button class="btn">  <img className="img1" src={pic5}/></button> click for more</Link>
               
               

                  </div>
            </div>
        
    <SectionServiceItem/>
    </section>
  );
}





 





export default AboutSection;
