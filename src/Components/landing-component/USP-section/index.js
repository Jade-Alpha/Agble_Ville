import React from 'react';
import styles from "./index.module.css"
import pic1 from "../../../Assect/sunrise.png"
import pic2 from "../../../Assect/leaves.png"
import pic3 from "../../../Assect/wheat.png"
import pic4 from "../../../Assect/house.png"
function  SectionServiceItem(){
    return (
      <section >
       
           <div className="services">
          <div className="service-card">
          <h2 className='txt'>01  <img className="images" src={pic1}/> </h2>
            <h3>GIFT BOXES</h3>
            <p>We avoid any artificial additives
               after harvesting the crops to offer 
               you the best organic products..</p>
          </div>
          <div className="service-card">
            < h2 className='txt'>02  <img className="images" src={pic2}/></ h2>
            <h3>BUNDLE DEALS</h3>
            <p>We avoid any artificial additives 
              after harvesting the crops to 
              offer you the best organic products..</p>
          </div>
          <div className="service-card">
          < h2 className='txt'>03  <img className="images" src={pic3}/></ h2>
            <h3>SUPRISE PRODUCT</h3>
            <p>We avoid any artificial additives after 
              harvesting the crops to offer 
              you the best organic products..</p>
          </div>
          <div className="service-card">
          < h2 className='txt'>04  <img className="images" src={pic4}/></h2>
            <h3>SUPRISE PRODUCT</h3>
            <p>We avoid any artificial additives after harvesting the crops to 
              offer you the best organic products..</p>
          </div>
          
        </div>
      </section>
    );
  }
  
  
  
  export default SectionServiceItem;
  