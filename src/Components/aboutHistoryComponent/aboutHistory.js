import img1 from "../../Assect/mercy.jpeg"
import img2 from "../../Assect/image1.jpg"
import img3 from "../../Assect/image1.jpg"
import img4 from '../../Assect/image4.jpg'
import tictok from "../../Assect/tiktok_3116491.png"
import twitter from "../../Assect/twitter_6422210.png"
import youtube from "../../Assect/youtube_1384012.png"
import marks from "../../Assect/right.png"
import face from "../../Assect/joseph-gonzalez-iFgRcqHznqg-unsplash (1).jpg"
 
 export default  function   AboutHistory () {
  return (
    <section>


<section class="abouthero">
            <h2>ABOUT US</h2>
            <div class="hero-item">

                <div class="hero-card">
                    
                    <p>
                    We are industry-leading organic farm delivering the best products
that boost your daily life energy and potential
                    </p>
                </div>
               
                
            </div>
</section>

        <section class="history">
            <h2>OUR HISTORY</h2>
            <div class="history-item">

                <div class="history-card">
                    <h3>THE BEGINING
                    </h3>
                    <p>
                    Since our inception, we have remained steadfast in our dedication to excellence and innovation. With each passing year, our platform has evolved and expanded, responding to the needs of our growing community. Today, we proudly stand as a leading online destination 
                    </p>
                </div>
                <div class="history-card">
                    <h3>VENDOR SCOUT
                    </h3>
                    <p>
                    </p>
                    Since our inception, we have remained steadfast in our dedication to excellence and innovation. With each passing year, our platform has evolved and expanded, responding to the needs of our growing community. Today, we proudly stand as a leading online destination 

                </div>
                <div class="history-card">
                    <h3>NEW LOOK
                    </h3>
                    <p>
                    Looking ahead, our commitment to sustainability, fair trade practices, and customer satisfaction remains unwavering. As we continue to innovate and adapt, we invite you to join us on our journey to build a healthier, more sustainable food system for generations to come
                    </p>
                </div>
            </div>
</section>


    
<section className="teamsession">
<h2>OUR TEAM</h2>
<div className="team">


    
       
        <div className="team-card">
        <img className="img1" src={img1}/>
            <h3>VENDOR MANAGER
            </h3>
            <p>
         MISS MERCY KORKOR ESSEL 
            </p>
            <div className="social-media">
            <img className="socialmedia-img" src={tictok}/>
            <img className="socialmedia-img" src={youtube}/>
            <img className="socialmedia-img" src={twitter}/>
            </div>
            

        </div>
        <div class="team-card">
        <img className="img1" src={img2}/>
        <h3>CONTENT MANAGER
            </h3>
            <p>

         MR KOFI ADU 
            </p>
              <div className="social-media">
            <img className="socialmedia-img" src={tictok}/>
            <img className="socialmedia-img" src={youtube}/>
            <img className="socialmedia-img" src={twitter}/>
                   
                </div>
            


        </div>
        <div class="team-card">
        <img className="img1" src={img3}/>
            
            <p>
            <h3>SALES MANAGER
            </h3>
        ADJOA ABBAN 
            </p>
            <div className="social-media">
            <img className="socialmedia-img" src={tictok}/>
            <img className="socialmedia-img" src={youtube}/>
            <img className="socialmedia-img" src={twitter}/>
                   
                </div>


        </div>
        <div class="team-card">
        <img className="img1" src={img4}/>
        
            <h3>SALES MANAGER
            </h3>
            <p>
        ADJOA ABBAN 
            </p>
            <div className="social-media">
            <img className="socialmedia-img" src={tictok}/>
            <img className="socialmedia-img" src={youtube}/>
            <img className="socialmedia-img" src={twitter}/>
                   
                </div>
            
            




        </div>

        </div>

        

</section>


        <section class="testimonial">
            <h2>TESTIMONIALS</h2>
            <div class="testi-item">

                <div class="testi-card">
                <div  className="marks"><img src={marks}/></div>

                    
                    <p>
                    "I stumbled upon this agro online marketplace when I was searching for a convenient way to purchase fresh produce for my family. Not only was I impressed by the wide range of products available, but the seamless ordering process and timely delivery truly exceeded my expectations."" 
                    </p>
                    <div  className="face "><img src={face}/>  <h4>
                         MISS ADJOA (customer)   </h4></div>
                </div>
                <div class="testi-card">

                <div className="marks" ><img className="marks" src={marks}/></div>
                    
                    <p>
                    "As a small-scale farmer, I've struggled to find a platform that allows me to connect with customers and sell my produce directly. That's why I was thrilled to discover this agro online marketplace. Not only does it provide me with a user-friendly platform to showcase my products"
                        <div  className="face"><img src={face}/> 
                        <h4>
                         AGYA KWESI(Vendor)   </h4> </div>
                    </p>

                </div>
                
            </div>
</section>




</section>



  );
}


  

